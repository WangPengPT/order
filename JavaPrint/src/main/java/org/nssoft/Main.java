package org.nssoft;

import java.awt.*;
import java.awt.print.*;
import java.util.List;
import java.util.ArrayList;

import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;
import org.json.JSONObject;


public class Main {

    static boolean running = true;

    public static void main(String[] args) {

        try {
            // 使用正确的导入路径
            IO.Options options = new IO.Options();
            options.timeout = 5000;

            // 创建Socket实例
            Socket socket = IO.socket("http://localhost", options);

            // 添加事件监听器
            socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {
                @Override
                public void call(Object... args) {
                    System.out.println("✅ 连接成功!");
                    socket.emit("add_printer");
                }
            });

            socket.on(Socket.EVENT_CONNECT_ERROR, new Emitter.Listener() {
                @Override
                public void call(Object... args) {
                    System.err.println("❌ 连接错误: " + args[0]);
                }
            });

            socket.emit("add_printer");

            socket.on("print", new Emitter.Listener() {
                @Override
                public void call(Object... args) {
                    print(args[0].toString());
                }
            });

            // 建立连接
            socket.connect();

            // 保持主线程运行
            while (running) {
                Thread.sleep(5000);
            }

            // 关闭连接
            socket.disconnect();

        } catch (Exception e) {
            System.err.println("🚫 发生异常: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public static void print(String line) {
        var lines = line.split("\n");

        // 创建打印作业
        PrinterJob printerJob = PrinterJob.getPrinterJob();

        // 设置页面格式（可以自定义）
        PageFormat pageFormat = printerJob.defaultPage();

        // 创建字体
        //Font font = new Font(null, Font.PLAIN, 10);

        // 创建Printable对象
        Printable printable = new Pinter(lines);

        // 设置打印内容
        printerJob.setPrintable(printable, pageFormat);

        try {
            // 显示打印对话框
            //if (printerJob.printDialog()) {
            printerJob.print();
            System.out.println("✅ 打印任务已提交（多页）");
            //}
        } catch (PrinterException e) {
            System.err.println("❌ 打印失败: " + e.getMessage());
        }
    }

    public static class Pinter implements Printable {

        public Pinter(String[] lines) {
            this.lines = lines;
        }

        String[] lines;

        @Override
        public int print(Graphics graphics, PageFormat pageFormat, int pageIndex) throws PrinterException {


            // 计算可打印区域
            double pageHeight = pageFormat.getImageableHeight();
            double pageWidth = pageFormat.getImageableWidth();

            Graphics2D g2d = (Graphics2D) graphics;

            // 计算行高
            FontMetrics fontMetrics = g2d.getFontMetrics();
            int lineHeight = fontMetrics.getHeight();

            // 每页行数 = 可打印高度 / 行高
            var linesPerPage = (int) Math.floor((pageHeight - fontMetrics.getHeight() * 2) / lineHeight);
            int totalPages = (int) Math.ceil((double) lines.length / linesPerPage);

            // 检查请求的页索引是否超出范围
            if (pageIndex >= totalPages) {
                return NO_SUCH_PAGE;
            }

            // 设置绘图原点为可打印区域的左上角
            g2d.translate(pageFormat.getImageableX(), pageFormat.getImageableY());

            // 计算当前页内容的起始行
            int startLine = pageIndex * linesPerPage;
            int endLine = Math.min(startLine + linesPerPage, lines.length);

            // 打印当前页的内容
            int y = fontMetrics.getHeight(); // 从第一行开始（页眉下方）
            for (int i = startLine; i < endLine; i++) {
                String line = lines[i];
                g2d.drawString(line, 0, y);
                y += lineHeight;
            }

            // 打印页脚
            String footer = "page "  + (pageIndex+1) + "/" + totalPages + "";
            int footerY = (int) (pageHeight - fontMetrics.getDescent()); // 底部留出空间
            g2d.drawString(footer, 0, footerY);

            return PAGE_EXISTS;
        }
    }
}