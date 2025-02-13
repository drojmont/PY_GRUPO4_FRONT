const events = [
    {
      id:1,
      name: "AWS Summit Madrid 2025",
      description: "es el evento más destacado sobre la tecnología en la nube de AWS en España. Es un evento gratuito que atrae a profesionales y ejecutivos de diversas industrias interesados en conocer cómo AWS puede ayudarles a innovar de manera ágil.",
      images: [
        "https://media.licdn.com/dms/image/v2/D4E12AQHzYhBSjlDTFQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733772903669?e=2147483647&v=beta&t=LUTvokd0mif5yZd3Vq7isvAp1ZDZnFQPBkhsvcTArJ4",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0F34ZijmDHGRR3le5nnnhpNzjwm4U4FLuxyI2-iNNSXRLEkynl8mSuJX-BKR4OLUtLSY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHgBRdLCXFfaP3sN7ZfZX00HNCILVtUUluJ5R8X-3NVaptwjlhsSbJGCoxeDM21Ve9Cc&usqp=CAU",
        "https://i.ytimg.com/vi/BSjOJsh4S68/maxresdefault.jpg",
        "https://i.ytimg.com/vi/2AMASTQyOvw/maxresdefault.jpg"
      ]
    },
    {
      id:2,
      name: "CES (Consumer Electronics Show)",
      description: "La feria de tecnología más grande del mundo, donde las empresas presentan las últimas innovaciones en electrónica de consumo.",
      images: [
        "https://dandreavisual.com/wp-content/uploads/2022/11/CES-Las-Vegas-2.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgNRhp_yOrKnIWfuwWSIH30sz3XV2_YVyP1Or-OLELfh5UMaJ8y4VH1zqRtBvGXbrCfc&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJ3WD0E5mPG5D79DLHN0T-lpSe8YnANPgo2vY7jwZWG835cvkoeXlu0fr6l79c_Zp-4Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiE6660zrUG-lOWpo-EMwOiTiqRYUQykKoI534CGp8fMfkeywkssjgOIlz0J7Di4nnzw&usqp=CAU",
        "https://etimg.etb2bimg.com/photo/88556613.cms"
      ]
    },
    {
      id:3,
      name: "Mobile World Congress",
      description: "Uno de los eventos más importantes de la industria móvil, celebrado en Barcelona, donde se presentan las últimas tendencias en telecomunicaciones y tecnología móvil.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMXLZ56ZCEQbXdPxTwU05lHF_y8SmNpg4lw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzP0I_Gu_PuSa7p25biF0Njo0dTy-yd5AEEFpYbJDg9ONj1RCtY-v1fn1xP9h665zBBI&usqp=CAU",
        "https://estaticos.elcolombiano.com/binrepository/1005x565/112c0/780d565/none/11101/SLIQ/colombia-en-feria-mobile-world-congress-2024_44515008_20240227143618.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOrH9PKLTm1H7jRpTlaTFi_BIwud19LMY9g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANd9cLMkS257aKXDQ8QVH-SgGTJtFD-98aQ&s"
      ]
    },
    {
      id:4,
      name: "Art Basel",
      description: "Una de las ferias de arte más prestigiosas del mundo, con ediciones en Basilea, Miami y Hong Kong, donde se exhiben obras de artistas contemporáneos.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpuN5Xd5GN6YHCeGinrNVkOSFRh4UZ7ETNg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6FpnxF5rwicUSu6KLMU9uKS3k-LehQ3i-9UmfL9lsUEIIugptdeAM-7nJD4zZqTm3Yg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5EL2CmFf0c4KofbkE0dNBBWrqR3J4vJcmg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRch1ZspbpCd48nyEUVAr24v1Fy3s25e1_BnuxeVkSiA1MFPbAPgmJoF-8FT9EetvYN8rc&usqp=CAU",
        "https://s3.perrotin.com/vue/photo/43319.jpg?d=2048xauto"
      ]
    },
    {
      id:5,
      name: "Salón del Automóvil de Ginebra – Suiza (Marzo)",
      description: "El Salón Internacional del Automóvil de Ginebra es un salón del automóvil que se celebra en el mes de marzo o abril en el Palexpo de Ginebra, Suiza. Es uno de los salones más importantes en Europa, junto con los de Fráncfort y París. .",
      images: [
        "https://previews.123rf.com/images/akulamatiau/akulamatiau1203/akulamatiau120300102/12572922-ginebra-suiza-08-de-marzo-2012-pagani-huayra-en-el-82o-sal%C3%B3n-del-autom%C3%B3vil-internacional-de.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6HoYRxYnjHfJE-aYhsKzYXRYU7P-gAWYz8W8B80jUHye19pOJHUvAz3XgFY2KiHnPOs&usqp=CAU",
        "https://thumbs.dreamstime.com/z/suiza-ginebra-de-marzo-pagani-zonda-hp-barchetta-t-118347549.jpg",
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/05/15518059829359.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70IJWEFkJFSYIzQhZrIc6qiEREiJkUsyp8jD130eh7cmvR0sqT-jChQ4nASE-dgqiZPU&usqp=CAU"
      ]
    },
    {
      id:6,
      name: "Comic-Con International",
      description: "Convención de cultura pop en San Diego, donde se presentan avances de películas, series, cómics y videojuegos.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vn0ZDd2CErElW421as6un3CP0X3c6GU6SQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYvvmV2vjzyujz6T1SzV8mQm4If1HNc-6vA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpVmpIP1mhYNMLJp5yxxiaB8LbXm6abrncA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjfGy2BmdCslucAvIXVmNEQDJF5-EvltDvJtZqubdaGtFnFROkR_VzRb3P3gtcxvZl3eI&usqp=CAU",
        "https://www.kron4.com/wp-content/uploads/sites/11/2020/04/comic.jpg"
      ]
    },
    {
      id:7,
      name: "Paris Fashion Week",
      description: "Uno de los eventos de moda más influyentes, donde las principales casas de moda presentan sus colecciones.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2WbVWGO1V5A5B-iwzUKzG5zEheGjsrL9JA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrFTRzONKF3u33RzvwewXyoVIo3gEPkAnOQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1grNkrD8maRhwxn-fsYoWhV9Kmoeh1BMbzXwvSzsdbzfRCo2EgOBZV3tOIvldz90sufw&usqp=CAU",
        "https://static.wixstatic.com/media/e4b4c7_8757e0fd6c71449095fe1e5e711c0fb6~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e4b4c7_8757e0fd6c71449095fe1e5e711c0fb6~mv2.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/gigi-hadid-and-models-walk-the-runway-during-the-finale-of-news-photo-1664487635.jpg?crop=0.668xw:1.00xh;0.242xw,0&resize=1200:*"
      ]
    },
    {
      id:8,
      name: "Tokyo Game Show",
      description: "Evento dedicado a la industria de los videojuegos, donde se presentan los últimos desarrollos de empresas japonesas y globales.",
      images: [
        "https://img.kyodonews.net/english/public/images/posts/357286df0977601fa8b28a913f5aa20b/photo_l.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIoG3jdC3er7noTiKDMyWtkpQgaL9IH0hR3Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4wxBBlkOLKlyCJJ-rMV_k8aG2DAdxCBA_W9CC2DjxO09csthKjJ8fcpK9AlPLx2sGRI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jvPpGM00ZFUc9EILqzc3jU7R3kzQ5hBnbxvfeVV2XHCC2YRFZNpTehFeYNOHBnsdZiI&usqp=CAU",
        "https://japannews.yomiuri.co.jp/wp-content/uploads/2023/09/Game-show.jpg"
      ]
    },
    {
      id:9,
      name:'Festival de Cannes',
      description:"El Festival de Cannes es un festival de cine de categoría A, celebrado anualmente en la ciudad francesa de Cannes, en la Riviera Francesa, Provenza-Alpes-Costa Azul. Está acreditado por la FIAPF, junto con los festivales de Berlín, San Sebastián, Mar del Plata, Karlovy Vary y Venecia, entre otros. Este festival, además de presentar filmes con presencia más independiente, también es el festival más importante de la industria europea del cine.",
      images: [
        "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZS3FUZB4L5CCDFVYDXVMDJZNTU.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePiAeMM7r9BkgrAOHGyHRp04gmkZrtpuxog&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQ4MxM5z_RyAik2DapGa5l4am2duYzyPVDQ&s",
        "https://media.istockphoto.com/id/526549773/es/foto/festival-de-cine-de-cannes.jpg?s=612x612&w=0&k=20&c=jDP6DdWpKlGhdsHwFm1smPAP8YkF7YEYfSnatUpZnVk=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcA33ZQgibX9w6F5DMkQPkCs7-LSCvmnRw&s"
      ]
    },
    {
      id:10,
      name:'Tour de Francia',
      description:"El Tour de Francia (oficialmente Tour de France), también conocido simplemente como el Tour, es una vuelta por etapas profesional de ciclismo en ruta disputada a lo largo de la geografía francesa —aunque suele transcurrir parcialmente por los países vecinos—. Tradicionalmente se celebra en julio1​ y pertenece al calendario UCI WorldTour, máxima categoría de las carreras profesionales.",
      images: [
        "https://bicimex.com/storage/blog/230103131626_resumen-tour-de-francia.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjczxZXNwVJ4P7fiHV_6F4FSVNIgn-eqL6EA&s",
        "https://estaticos-cdn.prensaiberica.es/clip/3bbefd41-fff3-483b-84fa-01a449a64f11_alta-libre-aspect-ratio_default_0.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAvlXEL32jLg8tzCuDBJbDROqH2rxFgCTDg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zILl7PySOl0hlKiwC26ANPBI6ymbvf2FLw&s"
      ]
    }
  ];
  

  export default events;