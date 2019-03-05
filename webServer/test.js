let metaInfoList;

let sample = {
    "media_type": "podcast",
    "title": "title",
    "description": "this is description for Audio",
    "artist": "artist",
    "imageurl": "https://url.com/urlImage.png",
    "media_url": "https://url.com/sampleMediaUrl.mp3",
    "media_name": "media_name",
    "media_playtime": 240,
    "media_size": 4096000,
    "category": "category_name",
    "album_name": "album_name"
}

metaInfoList =                              // news
{
    "content_type": "news",
    "content_name": "뉴스",
    "content_count": 2,
    "now_playing_index": 0,

    "media_list": [
        {
            "media_id": "000A_20181226_001",
            "media_index": 0,
            "media_type": "news",
            "title": "연합뉴스TV",
            "description": "This is description for '000A_20181226_001'",
            "artist": "연합뉴스",
            "imageurl": "https://url.com/urlImage_000A_20181226_001.png",
            "media_url": "https://content.com/news/content_002.mp3",
            "media_name": "연합뉴스TV",
            "media_playtime": 300,
            "media_size": 40960000,
            "category": "경제",
            "album_name": "20181226"
        },
        {
            "media_id": "000A_20181226_002",
            "media_index": 1,
            "media_type": "news",
            "title": "연합뉴스TV",
            "description": "This is description for '000A_20181226_002'",
            "artist": "연합뉴스",
            "imageurl": "https://url.com/urlImage_000A_20181226_002.png",
            "media_url": "https://content.com/news/content_002.mp3",
            "media_name": "연합뉴스TV",
            "media_playtime": 180,
            "media_size": 20480000,
            "category": "경제",
            "album_name": "20181226"
        }
    ]
}



metaInfoList =
{
    "content_type": "music",
    "content_name": "지니뮤직",
    "content_count": 2,
    "now_playing_index": -1,

    "media_list": [
        {
            "media_id": "000A_GENIE_001",
            "media_index": 0,
            "media_type": "music",
            "title": "Palette",
            "description": "This is description for '000A_GENIE_001'",
            "artist": "아이유",
            "imageurl": "https://url.com/urlImage_000A_GENIE_001.png",
            "media_url": "https://content.com/genie/content_001.mp3",
            "media_name": "Palette",
            "media_playtime": 300,
            "media_size": 40960000,
            "category": "가요",
            "album_name": "Palette"
        },
        {
            "media_id": "000A_GENIE_002",
            "media_index": 1,
            "media_type": "music",
            "title": "밤편지",
            "description": "This is description for '000A_GENIE_002'",
            "artist": "아이유",
            "imageurl": "https://url.com/urlImage_000A_GENIE_002.png",
            "media_url": "https://content.com/genie/content_002.mp3",
            "media_name": "밤편지",
            "media_playtime": 300,
            "media_size": 40960000,
            "category": "가요",
            "album_name": "Palette"
        }
    ]
}


metaInfoList =
    {
        "content_type": "podcast",
        "media_name": "팟캐스트",
        "media_count": 3,
        "now_playing_index": -1,

        "media_list": [
            {
                "media_id": "media_identifier_000A_PODCAST_100",
                "media_index": 0,
                "media_type": "podcast",
                "artist": "김어준",
                "title": "100회 제목입니다.",
                "album_name": "김어준의 뉴스공장",
                "description": "This is description for 'media_identifier_000A_PODCAST_100'"
            },
            {
                "media_id": "media_identifier_000A_PODCAST_101",
                "media_index": 0,
                "media_type": "podcast",
                "artist": "김어준",
                "title": "101회 제목입니다.",
                "album_name": "김어준의 뉴스공장",
                "description": "This is description for 'media_identifier_000A_PODCAST_100'"
            },
            {
                "media_id": "media_identifier_000B_PODCAST_001",
                "media_index": 0,
                "media_type": "podcast",
                "artist": "유시민",
                "title": "1회 제목입니다.",
                "album_name": "유시민의 팟캐스트",
                "description": "This is description for 'media_identifier_000B_PODCAST_001'"
            }
        ]
    }
