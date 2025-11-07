const welcomeTemplate = {
    logoPath: "",
    titles: [{
        title: {
            text_zh: "",
            text_en: "",
            text_pt: ""
        },
        image: {
            src: ""
        },
        enable: false,
        description: {
            text_zh: "",
            text_en: "",
            text_pt: ""
        }
    }],

    frames: [
        [
            {
                images: [
                    {
                        src: "",
                        enable: false
                    }
                ],
                title: {
                    text_zh: "",
                    text_en: "",
                    text_pt: ""
                },
                subtitle: {
                    text_zh: "",
                    text_en: "",
                    text_pt: ""
                },
                descriptions: [
                    {
                        left:
                        {
                            text_zh: "",
                            text_en: "",
                            text_pt: ""
                        }
                        ,
                        right:
                        {
                            text_zh: "",
                            text_en: "",
                            text_pt: ""
                        }

                    }
                ]
            }
        ]
    ],

    options: {
        rightDescriptionBold: false,
        leftDescriptionBold: false
    },

    moreButton: {
        enable: false,
        ref: ""
    },
    reserveButton: {
        enable: false,
        src: ""
    },
    takewayButton: {
        enable: false,
        src: ""
    }
}

module.exports = welcomeTemplate