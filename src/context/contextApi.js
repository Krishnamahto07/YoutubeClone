import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";


export const Context = createContext();

export const AppContext = (props) =>{

    const [loading , setLoading ] = useState(false);
    const [searchResults , setSearchResults ] = useState(false);    
    const [selectCategories , setSelectCategories ] = useState("New");
    const [mobileMenu , setMobileMenu ] = useState(false);

    const temp = [
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/URIkrpc5beRRixyBv-yPIdmjUb6aieDnyXAKqe_csUNfX7pmvvE4Ar-DwRJFYR5xzXbQssr9nwg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@Wynnsanity",
                    "channelId": "UCdjT0TX-IKlSJxon_oOZ-ag",
                    "title": "Wynnsanity"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "NEW WATER MODE CONQUEROR GRIND! PUBG MOBILE LIVE Donate Here: Support the stream here: ...",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 850
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/1F2eh_RubS8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIqi5_UM3DejnY-685sqJtbbbjrQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/1F2eh_RubS8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTsWvXmaisDemz0YMQaAZY7TVNXA",
                        "width": 720
                    }
                ],
                "title": "NEW WATER MODE CONQUEROR GRIND! PUBG MOBILE LIVE",
                "videoId": "1F2eh_RubS8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/DQKHWL4ZSGJdb_XOc3MjWQrLwDuUwdmqTp7BKahvdTYEazfp0PqRF79eaHbsCPhPyGecLjL9UsM=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@KaiCenatLive",
                    "channelId": "UCvCfpQXRXdJdL07pzTIA6Cw",
                    "title": "Kai Cenat Live"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Kai Cenat Returns To New York City! FOLLOW ME ON TWITCH: https://www.twitch.tv/kaicenat Follow My Socials: Main ...",
                "isLiveNow": false,
                "lengthSeconds": 1621,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/KE6CMeUnI38/mqdefault_6s.webp?du=3000&sqp=CMHp4rQG&rs=AOn4CLDCQDhHmyMBNYNDIk03N7iQxODvTw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 hours ago",
                "stats": {
                    "views": 250743
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/KE6CMeUnI38/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDk3H_fFahUUFnFnYhm_3ioL04dg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/KE6CMeUnI38/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3HKSsDnLTIXJSmeq7UUH0qZkSiA",
                        "width": 720
                    }
                ],
                "title": "Kai Cenat Returns To New York City!",
                "videoId": "KE6CMeUnI38"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/0QGI8zklOCT5MXvdm1IEB1rfdDoFwop3hwIQBtK1ycBov5zw8zUqS2xX0f0Tac7HtI9C-A_y=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@SBMRASIYA",
                    "channelId": "UCdST1wij-n2Mg03rkD3ryhg",
                    "title": "SBM RASIYA"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Jason Statham New Released Hollywood Action Movie 2024 | Parker |New Best Action Movie in English 4k.",
                "isLiveNow": false,
                "lengthSeconds": 7121,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/G4Z5o4aQFO8/mqdefault_6s.webp?du=3000&sqp=CJLp4rQG&rs=AOn4CLASH7DCp-Rd83RNefQ4ykFXtwaGZg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 1346026
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/G4Z5o4aQFO8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKUTewh8otJcUR5F5_cmJlMEbeNg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/G4Z5o4aQFO8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbDl1kwNzS6u6rlCB38uVZKBwXWA",
                        "width": 720
                    }
                ],
                "title": "Jason Statham New Released Hollywood Action Movie 2024 | Parker |New Best Action Movie in English 4k",
                "videoId": "G4Z5o4aQFO8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/Q-ry-JNiIiQtu7V8C3PdBFyOI-i4_bR_v8jpnkvKSAlgrLaZa40Zu1TQyfGVCGm9-49JxlOjng=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@SkyNewsAustralia",
                    "channelId": "UCO0akufu9MOzyz3nvGIXAAw",
                    "title": "Sky News Australia"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "New footage has emerged revealing just how close Donald Trump came to death when he was shot at his Pennsylvania rally on ...",
                "isLiveNow": false,
                "lengthSeconds": 311,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/UvQAg7BPm8k/mqdefault_6s.webp?du=3000&sqp=CLjP4rQG&rs=AOn4CLDkP2uNxK5DTc-OBTZPBpp813ONlw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 1368641
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/UvQAg7BPm8k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWcdMHKhG34MmboK7pIclYy6IOmQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/UvQAg7BPm8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzl3-FpUsC6VXkcGCOCXp0TC3fJg",
                        "width": 720
                    }
                ],
                "title": "‘Miracle’: Shocking new footage shows just how close Donald Trump came to death",
                "videoId": "UvQAg7BPm8k"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/CNGgWcnHLisbQGrcXdum5esmyds7mV3S2w-j2qdVmYC471KDEu820Rfcw4QEDEfj4wJVZmSDNw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@KountryWayneOfficial",
                    "channelId": "UCiz19rgacvujLo0-FH8u5xA",
                    "title": "Kountry Wayne"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": null,
                "isLiveNow": false,
                "lengthSeconds": 189,
                "movingThumbnails": null,
                "publishedTimeText": "9 hours ago",
                "stats": {
                    "views": 81456
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/LXHRCgr_sPs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR_sT43qOO4HLT6Y7puwxLlk-Pdg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/LXHRCgr_sPs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu8EtsFvzWl43P4pMu7E6hxYVCMw",
                        "width": 720
                    }
                ],
                "title": "When Cocoa rips Brittany a new one!",
                "videoId": "LXHRCgr_sPs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/FPTVXZews9xL8Uuoy8v3So2AQDfACklq6bQ-TJYowxzDSaWLMJT6uxAHFsrxMT0kwadRj7BxKw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@PraiseWorshipMusic",
                    "channelId": "UCY0f6XgwdlmOL1oV-wJ-DfA",
                    "title": "Praise Worship Music"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "Music and Video Copyright belongs to @Praise Worship Music. DO NOT reupload, otherwise, you will get copyright strikes.",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 747
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/xu1k2jLVoOA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbPYvha1G6clwUjMy0g40NlMND-A",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/xu1k2jLVoOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZm7EMwubD_7Lsay7UethzXFom3w",
                        "width": 720
                    }
                ],
                "title": "New Christian Worship Songs 2024 With Lyrics 🙏 Best Morning Worship Songs For Prayers 2024",
                "videoId": "xu1k2jLVoOA"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ABCNews",
                    "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                    "title": "ABC News"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "ABC News has learned that heavily armed local police were stationed inside the building and missed Thomas Crooks climbing ...",
                "isLiveNow": false,
                "lengthSeconds": 174,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/6tReC8aNS0A/mqdefault_6s.webp?du=3000&sqp=CNDg4rQG&rs=AOn4CLA6e4XtmKtjWwkM-2yybk4AFGr3Hw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 days ago",
                "stats": {
                    "views": 6640410
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/6tReC8aNS0A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbPkhTpj8rv5Lt8VPGu4kZmv6QXw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/6tReC8aNS0A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLwpyYtYHx15fGwLfoGOSUgJopAA",
                        "width": 720
                    }
                ],
                "title": "New video shows Trump shooter climbing onto the roof at rally",
                "videoId": "6tReC8aNS0A"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nu33uPAlKn2PO1Sk88ppYIIu3Lbs2VAsVJDQa9s0LOLTc=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@JamunaTVbd",
                    "channelId": "UCN6sm8iHiPd0cnoUardDAnw",
                    "title": "Jamuna TV"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "studentprotest #banglablockade #quota #quotamovement জাতির উদ্দেশে ভাষণে যা বললেন ...",
                "isLiveNow": false,
                "lengthSeconds": 460,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/HKPJe75A1d8/mqdefault_6s.webp?du=3000&sqp=CITT4rQG&rs=AOn4CLA_R0fP4GsTzgrcdA2uhfQJe7iDhw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "16 hours ago",
                "stats": {
                    "views": 2356281
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/HKPJe75A1d8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAatavjGv9Yr54p5WHQIMUbPlOEdQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/HKPJe75A1d8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdm5OxIaPjrmAe1QqUBJSArsJnng",
                        "width": 720
                    }
                ],
                "title": "জাতির উদ্দেশে যা বললেন প্রধানমন্ত্রী শেখ হাসিনা | PM Sheikh Hasina Speech | Andolon | Jamuna TV",
                "videoId": "HKPJe75A1d8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@SaregamaMusic",
                    "channelId": "UC_A7K2dXFsTMAciGmnNxy-Q",
                    "title": "Saregama Music"
                },
                "badges": [
                    "4K",
                    "CC"
                ],
                "descriptionSnippet": "Experience the magic of Vicky Kaushal, Triptii Dimri and Karan Aujla's first-ever collaboration in \"Tauba Tauba\" from Bad Newz!",
                "isLiveNow": false,
                "lengthSeconds": 222,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/LK7-_dgAVQE/mqdefault_6s.webp?du=3000&sqp=CPrc4rQG&rs=AOn4CLAXufIC7dUx2Y-oUNSnS6mOSlEu4w",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 weeks ago",
                "stats": {
                    "views": 71988178
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/LK7-_dgAVQE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDofa1W_KaJqujafYefDcmq2l1FBw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/LK7-_dgAVQE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBM4i7LlIubMwRSavP8GmduiVNunA",
                        "width": 720
                    }
                ],
                "title": "Tauba Tauba | Bad Newz | Vicky Kaushal | Triptii Dimri | Karan Aujla | In cinemas 19th July",
                "videoId": "LK7-_dgAVQE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@CNN",
                    "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
                    "title": "CNN"
                },
                "badges": [
                    "New",
                    "CC"
                ],
                "descriptionSnippet": "CNN's John Miller describes Thomas Matthew Crooks' movements the day he opened fire on former President Donald Trump at a ...",
                "isLiveNow": false,
                "lengthSeconds": 431,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/ThEB2bdrfa8/mqdefault_6s.webp?du=3000&sqp=CJPV4rQG&rs=AOn4CLDp1CGQEMRWxHfJsb9FWCGBuYQr6A",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 1279349
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/ThEB2bdrfa8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASo_661ENseZUZmSls02Y6c2fKLQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/ThEB2bdrfa8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSoU02iEqtSZ9frTLzjwi9HlktWQ",
                        "width": 720
                    }
                ],
                "title": "What the Trump rally shooter told coworkers before the assassination attempt",
                "videoId": "ThEB2bdrfa8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/dF1ZRcwWOxfn3AysqfW-MMIod2jPfCfgFkMLYiQWGMOiELVA7-nWN7PaXnEv1RfVxRe5S9z36ow=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@livenowfox",
                    "channelId": "UCJg9wBPyKMNA5sRDnvzmkdg",
                    "title": "LiveNOW from FOX"
                },
                "badges": [
                    "New",
                    "CC"
                ],
                "descriptionSnippet": "TRUMP LATEST NEWS: New video has surfaced showing the shooter on a rooftop moments before former President Donald ...",
                "isLiveNow": false,
                "lengthSeconds": 831,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/8DiNzlYngow/mqdefault_6s.webp?du=3000&sqp=CLTD4rQG&rs=AOn4CLDUHpyfXNqHcIOR8LFpnhyGhTEnYQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "14 hours ago",
                "stats": {
                    "views": 912323
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/8DiNzlYngow/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLpFAW6aADGUeV8wkvYUQKL0hFfQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/8DiNzlYngow/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLJTrZ9NTtx9-YBRDsMYhJP0kTLw",
                        "width": 720
                    }
                ],
                "title": "Trump shooter seen in new video, Secret Service investigated by Homeland Security | LiveNOW from FOX",
                "videoId": "8DiNzlYngow"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/NpBpB2j3PrmMiYVQAXyU7JWcHmQWjT1wN0x1cxiacBgw7n-OuXgtcnGI9aBUR7BLRX4BwTdkzA=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PiersMorganUncensored",
                    "channelId": "UCatt7TBjfBkiJWx8khav_Gg",
                    "title": "Piers Morgan Uncensored"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "One of the most frequent accusations levelled against former president Donald Trump is that; he speaks like Hitler, he behaves ...",
                "isLiveNow": false,
                "lengthSeconds": 4345,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/iXnQrN2DJz4/mqdefault_6s.webp?du=3000&sqp=CKi74rQG&rs=AOn4CLDqjSdtFhCeokZiSOVJYQT1u7bPsw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "11 hours ago",
                "stats": {
                    "views": 871988
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/iXnQrN2DJz4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-PMINkw8W6INaUGsP5eD-wvQB4w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/iXnQrN2DJz4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVjO2ciEejT2BVROWB9QrRMcW2nw",
                        "width": 720
                    }
                ],
                "title": "“Is Trump The New Hitler? NO” Piers Morgan vs Mehdi Hasan | RNC Debate",
                "videoId": "iXnQrN2DJz4"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@TaarakMehtaKaOoltahChashmah",
                    "channelId": "UCnSFZ-olBoLGLRUS_3RI2Aw",
                    "title": "Taarak Mehta Ka Ooltah Chashmah"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Click here to Subscribe to Taarak Mehta Ka Ooltah Chashmah Official Channel: ...",
                "isLiveNow": false,
                "lengthSeconds": 406,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/pmPxdyx2zGQ/mqdefault_6s.webp?du=3000&sqp=CJDY4rQG&rs=AOn4CLD1_C-pnWMrCT7jCRWc7FJfPTncRA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "14 hours ago",
                "stats": {
                    "views": 585936
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/pmPxdyx2zGQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvJVIta8Iw6RCBcBuCeJRyxURUSw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/pmPxdyx2zGQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsa27VfHy9VHxqLPZCyKdgrJXPRQ",
                        "width": 720
                    }
                ],
                "title": "NEW! Ep 4139 -  Sonu Ne Diya Mahila Mandal Ko Surprise?! I Taarak Mehta Ka Ooltah Chashmah",
                "videoId": "pmPxdyx2zGQ"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/VNaqKQFMoMXPgqUfe12hvzG882lrDbElLT5yWH83h8ZvEyn1rJN8DkA4kaZdU36YbO79XniwOwY=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@StreamOnMax",
                    "channelId": "UCx-KWLTKlB83hDI6UKECtJQ",
                    "title": "Max"
                },
                "badges": [
                    "New",
                    "CC"
                ],
                "descriptionSnippet": "Trying some delicacies. A new episode of the HBO Original Series #HouseOfTheDragon is now streaming on Max. About Max: ...",
                "isLiveNow": false,
                "lengthSeconds": 329,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/aeNU8KTmwag/mqdefault_6s.webp?du=3000&sqp=CMDG4rQG&rs=AOn4CLARYAX9zksrEfTRvCwUtxMJbffa9Q",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 159928
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/aeNU8KTmwag/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAD21xWg6yi_icvOZMGMw9OaoXSDg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/aeNU8KTmwag/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEl96KsoxiW_94ySQfPsI5ztCsGQ",
                        "width": 720
                    }
                ],
                "title": "Ewan Mitchell & Tom Glynn-Carney Try Classic New York City Food | House of the Dragon | Max",
                "videoId": "aeNU8KTmwag"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/0pLQyz98kOoxqe0Bp4rlDEVYTTt2cD4_HPkwzYXYW8Ih8YT4MAh7VnwLmB9UbP_myaF-0EkE=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@SheriffLabrador",
                    "channelId": "UCXIvAXVdbUDzIFhVwB9RR-g",
                    "title": "Sheriff Labrador - Kids Cartoon"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Subscribe for new videos every week! https://www.youtube.com/channel/UCXIvAXVdbUDzIFhVwB9RR-g?sub_confirmation=1 ...",
                "isLiveNow": false,
                "lengthSeconds": 439,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/D0y9AogQdjE/mqdefault_6s.webp?du=3000&sqp=COLd4rQG&rs=AOn4CLD0XmkWHYYGa6e6KQIitWL-Hn01_Q",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 758578
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/D0y9AogQdjE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBe0ZqrQCljhbw3ZORexlKO32g0w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/D0y9AogQdjE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdIS7R53tX7YzSR_vYGSk2b4st8w",
                        "width": 720
                    }
                ],
                "title": "Teamwork | Educational Cartoons for Kids | Sheriff Labrador New Episodes",
                "videoId": "D0y9AogQdjE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/29BFG48jjq7vc5JTnvLHLRy4hYMUioeGGhyFYnho36AOl_JvK89054NUJIROnJAXtJLnwhnN4b0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@NewStatesman",
                    "channelId": "UC2DHAQOeEg-Z-4trARDXHRA",
                    "title": "The New Statesman"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Donald Trump has been greeted like a messiah at the Republican National Convention. But what if that bullet had been an inch to ...",
                "isLiveNow": false,
                "lengthSeconds": 639,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/Kpum12iI0Zs/mqdefault_6s.webp?du=3000&sqp=CL294rQG&rs=AOn4CLCcUMk_sQqnFdCnQJcTfFVGqumTCg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "23 hours ago",
                "stats": {
                    "views": 34723
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/Kpum12iI0Zs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAA4DYrG7vTPGdv6SpDL7yrvA2Fqg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/Kpum12iI0Zs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsHzB2CiV1NMEeZ8wRgzUBrtK28w",
                        "width": 720
                    }
                ],
                "title": "What if the Trump assassination attempt had succeeded? | Andrew Marr | The New Statesman",
                "videoId": "Kpum12iI0Zs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@TaarakMehtaKaOoltahChashmah",
                    "channelId": "UCnSFZ-olBoLGLRUS_3RI2Aw",
                    "title": "Taarak Mehta Ka Ooltah Chashmah"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "We bring to you the best videos from your favorite show Taarak Mehta Ka Ooltah Chashmah. So, get your daily dose of laughter ...",
                "isLiveNow": false,
                "lengthSeconds": 422,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/jvK8WM5tHbQ/mqdefault_6s.webp?du=3000&sqp=CKzA4rQG&rs=AOn4CLDq7gHZ9AWh9C1x3HX3txG0L88Stg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 days ago",
                "stats": {
                    "views": 1386940
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/jvK8WM5tHbQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA76I-7YIXeEtnYXunRQvb2-j8Bxg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/jvK8WM5tHbQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLHkuHt_EqEqu5tcZ_3hoYyCAGNg",
                        "width": 720
                    }
                ],
                "title": "NEW! Ep 4137 -  Popatlal Ne Kyu Kiya Sagai Karne se Mana?! I Taarak Mehta Ka Ooltah Chashmah",
                "videoId": "jvK8WM5tHbQ"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/9MUQ-OqjT0YjS-Nqov-LcqGWKkTPPPoUztyU0qVf7I5jugfpwcafcgN_4dgsJUt9MTP2dD49Qw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@RealTime",
                    "channelId": "UCy6kyFxaMqGtpE3pQTflK8A",
                    "title": "Real Time with Bill Maher"
                },
                "badges": [
                    "New",
                    "CC"
                ],
                "descriptionSnippet": "The issue with President Biden isn't if he will be replaced - it's who will replace him.",
                "isLiveNow": false,
                "lengthSeconds": 592,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/tCKNlj1uDyc/mqdefault_6s.webp?du=3000&sqp=CIu24rQG&rs=AOn4CLBb1sD1GBpH0AlW3Xt4NtqZYaODWw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 days ago",
                "stats": {
                    "views": 1793409
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/tCKNlj1uDyc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7ZeygEikcjdQt4pNUZ7-fkHMwaw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/tCKNlj1uDyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0RRpyymidPMhAZxhGUnugmjKd1Q",
                        "width": 720
                    }
                ],
                "title": "New Rule: Bye Bye Biden | Real Time with Bill Maher (HBO)",
                "videoId": "tCKNlj1uDyc"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_lnggXxbPuQ-eqqJIyjT2pM0DBvtlHV0iBxtW0MWNzaqVnZ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@TODAY",
                    "channelId": "UChDKyKQ59fYz3JO2fl0Z6sg",
                    "title": "TODAY"
                },
                "badges": [
                    "New",
                    "CC"
                ],
                "descriptionSnippet": "A rise in shark sightings very close to shore on beaches up and down the East Coast is forcing more closures just as we reach the ...",
                "isLiveNow": false,
                "lengthSeconds": 166,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/B-ceMmqi9O0/mqdefault_6s.webp?du=3000&sqp=CN254rQG&rs=AOn4CLC5E04F12TcaSP30Bup2s_5qoaL5g",
                        "width": 320
                    }
                ],
                "publishedTimeText": "17 hours ago",
                "stats": {
                    "views": 21804
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/B-ceMmqi9O0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGKW9pcaQmn9ONwrG2HUzjaJd8-w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/B-ceMmqi9O0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAky9Wns2FXd9AC-ozOSXRXg8JKOg",
                        "width": 720
                    }
                ],
                "title": "More beaches forced to close amid new shark sightings",
                "videoId": "B-ceMmqi9O0"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/p6wvPpHWsGtP0HmcPeCoT4FrU8Fo6uzsGz_C4MHuXxJIU25fJ0Tpz2rxhurPaVz_GQaBZpZT=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ScreenCultureOfficial",
                    "channelId": "UCGA2OgjW608QEaGwxA7aRTg",
                    "title": "Screen Culture"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Joker2 #JokerFolieàDeux #WarnerBros Take a look at our 'New Trailer' concept for DC Elseworlds' upcoming movie Joker: Folie ...",
                "isLiveNow": false,
                "lengthSeconds": 98,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/nIgt4rSOxOk/mqdefault_6s.webp?du=3000&sqp=CKzd4rQG&rs=AOn4CLDw-NLLKfnNiMPHE71GSt0SDPcg4w",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 days ago",
                "stats": {
                    "views": 203543
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/nIgt4rSOxOk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaKsJLmEeaiMPriSxH3hFbR04PDw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/nIgt4rSOxOk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEcHzWQhE6qI3jT4LXMpLX_U132w",
                        "width": 720
                    }
                ],
                "title": "Joker: Folie à Deux | New Trailer",
                "videoId": "nIgt4rSOxOk"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/1vzS5fBn9tYYbhmJhJoCN06D5ExLQm_wjkkso5P7zXgnQwbjfVnpkHzhSOy7_c33NKExD19D=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@Foxla",
                    "channelId": "UCHfF8wFnipMeDpJf8OmMxDg",
                    "title": "FOX 11 Los Angeles"
                },
                "badges": [
                    "New",
                    "CC"
                ],
                "descriptionSnippet": "California Gov. Gavin Newsom this week signed a bill that bans school districts from notifying parents if students want to go by a ...",
                "isLiveNow": false,
                "lengthSeconds": 304,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/QAbigi94KRc/mqdefault_6s.webp?du=3000&sqp=CKLH4rQG&rs=AOn4CLAk1KkMQwUvHJxPU8pnRNsM3l6l8Q",
                        "width": 320
                    }
                ],
                "publishedTimeText": "4 hours ago",
                "stats": {
                    "views": 944
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/QAbigi94KRc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAETXWxEiXja2s1tfyKRWVsGd6_Wg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/QAbigi94KRc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2HRtqUzxEv7Q2Uvc1Y5YfWlIvAw",
                        "width": 720
                    }
                ],
                "title": "Understanding California's new school gender identity law",
                "videoId": "QAbigi94KRc"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/efekaJ5LkAn1VavdShe-TRyLDYVVjMwkNnf_-7C7QQDkpR1ekq0WID3Sn_LQtUeN38F9U8gwDw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@ANJBEATZ",
                    "channelId": "UCky_P7-XlMtdNDwi_L4wZow",
                    "title": "ANJ BEATZ"
                },
                "badges": [],
                "descriptionSnippet": "2024 & 2023 Hit Sinhala New Song Collection - 2024 හිට් කළ සිංදු New Sinhala Hit Song 2024 @ANJBEATZ Mood ...",
                "isLiveNow": false,
                "lengthSeconds": 1856,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/dEixKmmUR18/mqdefault_6s.webp?du=3000&sqp=CIXY4rQG&rs=AOn4CLCoS2j9D1YNNu36bDJs3GgUzm1RoA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 1766515
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/dEixKmmUR18/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq7SzrX-uq74eO3LGcIv2hWURzrw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/dEixKmmUR18/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF5a2Gnzfb1bXy0H83wHA8ynXKHw",
                        "width": 720
                    }
                ],
                "title": "2024 & 2023 Hit Sinhala New Song Collection - 2024 හිට් කළ සිංදු New Sinhala Hit Song 2024",
                "videoId": "dEixKmmUR18"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_muOaJYnFrZ-ky-azsSN18M9D7vt0AdLJZPYebF_Hl8AVlp=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@PassengerParamvir",
                    "channelId": "UCK2_PiPOB0VEZfbbaHj-z5w",
                    "title": "Passenger Paramvir"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Arriving in \"Windy\" Wellington, New Zealand! Follow me on Instagram: paramvir_beniwal ...",
                "isLiveNow": false,
                "lengthSeconds": 2123,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/NJl0JM_mpas/mqdefault_6s.webp?du=3000&sqp=COPa4rQG&rs=AOn4CLDfqj28Uyg-yJbSC6o90K0Fa1IjEg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 hours ago",
                "stats": {
                    "views": 60366
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/NJl0JM_mpas/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAh9hvF8kWbJ0F5Nh9gTT1D5PUzqQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/NJl0JM_mpas/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSYf763VFiFLQJFNOKZ0xasnut7A",
                        "width": 720
                    }
                ],
                "title": "Exploring New Zealand's Capital: \"Windy Wellington\"! 🇳🇿",
                "videoId": "NJl0JM_mpas"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/9wsx6Bka7djrZRFgQS-HevCvC8oJKCRiz66Ln9LTPIXUb7c4xT6CBNyyvqfpDJAdZsRHtDrRWQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@shortlover420",
                    "channelId": "UCwO1kINCCxnLPmyub2zuZSw",
                    "title": "RIDOY SHORT'S"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "A Neighbor's Vendetta 2024 #LMN | Lifetime Movies [NEW] 2024 | Based On A True Story.",
                "isLiveNow": false,
                "lengthSeconds": 5380,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/muFTykyjuf8/mqdefault_6s.webp?du=3000&sqp=CK3S4rQG&rs=AOn4CLBrhJlxGMUlvya_IFhTD_UuN6XXEA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 130
                },
                "thumbnails": [
                    {
                        "height": 270,
                        "url": "https://i.ytimg.com/vi/muFTykyjuf8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqkRSU6Cs1EgKbpqw9aGPvIuKwYw",
                        "width": 480
                    }
                ],
                "title": "A Neighbor's Vendetta 2024 #LMN | Lifetime Movies [NEW] 2024 | Based On A True Story",
                "videoId": "muFTykyjuf8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/2rNT8npWDHaFE-R6P6-VieoVgknr-GoiNYwxI1jKhq9P4kxPi9wmHxELG3CMbKXWav8fIRbrNQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@KTLA5",
                    "channelId": "UCinjnmQEwCddOudyCC1v7qA",
                    "title": "KTLA 5"
                },
                "badges": [
                    "New",
                    "CC"
                ],
                "descriptionSnippet": "The FBI searched the home of the 20-year-old Pennsylvania man who tried to assassinate Donald Trump at a rally on Saturday as ...",
                "isLiveNow": false,
                "lengthSeconds": 198,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/mz7KlX77MBI/mqdefault_6s.webp?du=3000&sqp=COzT4rQG&rs=AOn4CLDJ7PJhKz1qPAqvkYIs4cModsrtJQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 723648
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/mz7KlX77MBI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfVA6_QvLJHF2iFrhpWyAHBbtD0g",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/mz7KlX77MBI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCe54T0Fh_H51Zz7jWKf0BMZNyxA",
                        "width": 720
                    }
                ],
                "title": "New details surrounding Trump gunman emerge as Secret Service comes under increased scrutiny",
                "videoId": "mz7KlX77MBI"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@FoxNews",
                    "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
                    "title": "Fox News"
                },
                "badges": [
                    "New",
                    "CC"
                ],
                "descriptionSnippet": "Fox News' CB Cotton reports the latest on the investigation from Butler, Pennsylvania. The 'Outnumbered' panel discussed the ...",
                "isLiveNow": false,
                "lengthSeconds": 455,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/XAd-Hg-CQRE/mqdefault_6s.webp?du=3000&sqp=CNfj4rQG&rs=AOn4CLD7tu7Ep5cYiAxu6jDBb0uZx-8zjQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "13 hours ago",
                "stats": {
                    "views": 486403
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/XAd-Hg-CQRE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAY8wslnebXjcp-zKs9krPJ10mGSg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/XAd-Hg-CQRE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiC0dtbBG7o5bR77CQ8wAY4f9-PA",
                        "width": 720
                    }
                ],
                "title": "Detonation device found near Trump shooter's body",
                "videoId": "XAd-Hg-CQRE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/dF1ZRcwWOxfn3AysqfW-MMIod2jPfCfgFkMLYiQWGMOiELVA7-nWN7PaXnEv1RfVxRe5S9z36ow=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@livenowfox",
                    "channelId": "UCJg9wBPyKMNA5sRDnvzmkdg",
                    "title": "LiveNOW from FOX"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "Day 3 of the Republican National Convention got underway Wednesday night in Milwaukee. Ohio Senator JD Vance is expected ...",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 3719
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/9c0Tr1Lp9ME/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBO_AMCtu6EBr30wtudC2niIg1xtw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/9c0Tr1Lp9ME/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC15nDK8Xz_3_uxxKSuGsBVLpC81g",
                        "width": 720
                    }
                ],
                "title": "WATCH: RNC Day 3, JD Vance accepts VP nomination, Biden COVID, Trump news | LiveNOW from FOX",
                "videoId": "9c0Tr1Lp9ME"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/B0d61TitiuKtK7nL6VmwM1upX3xL3URiKINRr_GXC1_Nk2bhddgunZ5M4z5EMurEmPIauWfwfg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@RkReddy",
                    "channelId": "UCurtk6gwUZPnccBndhFPNMQ",
                    "title": "RkReddy"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": null,
                "isLiveNow": false,
                "lengthSeconds": 20,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/l1-SVd_Tz1E/mqdefault_6s.webp?du=3000&sqp=CJrO4rQG&rs=AOn4CLAVPb3kT5daonVUukmLlOwQ1AW_cQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 316294
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/l1-SVd_Tz1E/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhyIF4oPzAP&rs=AOn4CLApAUwdr2ogYbvWJrelFWZHSPqssg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/l1-SVd_Tz1E/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhyIF4oPzAP&rs=AOn4CLCAQEDAaYCjOoRfERlihWu2DHo3Gw",
                        "width": 720
                    }
                ],
                "title": "New event 🔥!!! (Excited ??? ) #fcmobile",
                "videoId": "l1-SVd_Tz1E"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/DQKHWL4ZSGJdb_XOc3MjWQrLwDuUwdmqTp7BKahvdTYEazfp0PqRF79eaHbsCPhPyGecLjL9UsM=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@KaiCenatLive",
                    "channelId": "UCvCfpQXRXdJdL07pzTIA6Cw",
                    "title": "Kai Cenat Live"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "AMP Moves To New York! FOLLOW ME ON TWITCH: https://www.twitch.tv/kaicenat Follow My Socials: Main Channel: ...",
                "isLiveNow": false,
                "lengthSeconds": 762,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/d0P1i0yNkd4/mqdefault_6s.webp?du=3000&sqp=CJbh4rQG&rs=AOn4CLBfKYwhJCKL8NyKkl9dWNZ3JjGmWg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 1396047
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/d0P1i0yNkd4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCsLsPFQUJy7JZuRFCE463d9mrZA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/d0P1i0yNkd4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYBG-F5bl0UjXIbeZHVfMS_lcvdg",
                        "width": 720
                    }
                ],
                "title": "AMP Moves To New York!",
                "videoId": "d0P1i0yNkd4"
            }
        },
        {
            "playlist": {
                "author": {
                    "badges": [],
                    "canonicalBaseUrl": "/@littrendingmusic5719",
                    "channelId": "UCjejO-ccN8bSMBD0H2eSkCw",
                    "title": "Lit Trending Music · Playlist"
                },
                "playlistId": "PLO7-VO1D0_6N2ePPlPE9NKCgUBA15aOk2",
                "stats": {
                    "videos": 100
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/Oa_RSwwpPaA/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCtu90eELFpEKEcdp4nhN4KG7UqHA",
                        "width": 168
                    },
                    {
                        "height": 110,
                        "url": "https://i.ytimg.com/vi/Oa_RSwwpPaA/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLByGuS74lnpOikXzbOEM5uFa4QE8A",
                        "width": 196
                    },
                    {
                        "height": 138,
                        "url": "https://i.ytimg.com/vi/Oa_RSwwpPaA/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD3UaLi9sw20M7XugWp9ToYS65ERw",
                        "width": 246
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/Oa_RSwwpPaA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAC99QnhqGf8RUDHvjUXeQl98MzlA",
                        "width": 336
                    }
                ],
                "title": "New Song 2024 English - Latest English Songs 2024 - Trending English Songs",
                "updatedTime": null,
                "updatedTimeText": null
            },
            "type": "playlist"
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/GjDLYFGF4IQaUobUK-6q3nOsU4o8fRMl4XgVipPWRqdRVt61s2LqgnbBXu3-qYL4Ab2xsfVo=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@NBCNews",
                    "channelId": "UCeY0bbntWzzVIaj2z3QigXg",
                    "title": "NBC News"
                },
                "badges": [
                    "LIVE",
                    "New"
                ],
                "descriptionSnippet": "NBC News NOW is live, reporting breaking news and developing stories in real time. We are on the scene, covering the most ...",
                "isLiveNow": true,
                "lengthSeconds": null,
                "movingThumbnails": null,
                "publishedTimeText": null,
                "stats": {
                    "viewers": 2747
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/h0OIShWin3k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBl6uwaTYcNVI8ULrODiFfDZP_TrA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/h0OIShWin3k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMBRF7NgAc8uSeinxbKq0zj80cBA",
                        "width": 720
                    }
                ],
                "title": "LIVE: NBC News NOW - July 18",
                "videoId": "h0OIShWin3k"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/Y_iNjNBFP6bpHwT2hAHaLj7J3po22sGjwlR6mn26PWRp2IFesRAeNQEpSuh9xFiG8R57OOE83DE=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@BBC",
                    "channelId": "UCCj956IF62FbT7Gouszaj9w",
                    "title": "BBC"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "King Charles III has delivered the King's Speech at the State Opening of Parliament, in London. In a speech written by the ...",
                "isLiveNow": false,
                "lengthSeconds": 766,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/4EfiV4664ho/mqdefault_6s.webp?du=3000&sqp=CMrO4rQG&rs=AOn4CLA82VmZf3RmCtkqc5k_d1V9006Bmw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "18 hours ago",
                "stats": {
                    "views": 56755
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/4EfiV4664ho/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0bGCfVWstwlN4ojES86pCPP4LrA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/4EfiV4664ho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCW-4Y2woKbbzyNV6wREFOUkYwnrw",
                        "width": 720
                    }
                ],
                "title": "King's Speech outlines new UK government’s plans | State Opening of Parliament - BBC",
                "videoId": "4EfiV4664ho"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nPs25MbmGzXFX_OXh5O_r-GzUcK3sh39PbQsoMR0bf-fQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ForbesBreakingNews",
                    "channelId": "UCg40OxZ1GYh3u3jBntB6DLg",
                    "title": "Forbes Breaking News"
                },
                "badges": [
                    "New",
                    "4K"
                ],
                "descriptionSnippet": "Startling new footage has emerged from the crowd at former President Trump's campaign rally in Butler, Pennsylvania, when a ...",
                "isLiveNow": false,
                "lengthSeconds": 52,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/vGm8w65S_FA/mqdefault_6s.webp?du=3000&sqp=CLDU4rQG&rs=AOn4CLBAAfjWtIDx7ShLQsSSDjshPWqZoA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 days ago",
                "stats": {
                    "views": 1829805
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/vGm8w65S_FA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCs3D-PK6MQw-REfdIAjjgf03FY2w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/vGm8w65S_FA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1DwvZYcY8RO22ogh4S8lJCDl3gw",
                        "width": 720
                    }
                ],
                "title": "GRAPHIC WARNING: New Footage From Inside Trump Rally Shows Audience Response To Shooting",
                "videoId": "vGm8w65S_FA"
            }
        }
    ]









    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories])

    const fetchSelectedCategoryData = (query) =>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            setSearchResults(contents);
            setLoading(false);
        });
    }

    return (
        <Context.Provider value={{
            loading,setLoading,
            searchResults,setSearchResults,
            selectCategories,setSelectCategories,
            mobileMenu,setMobileMenu
        }} >
            {props.children}
        </Context.Provider>
    )
}