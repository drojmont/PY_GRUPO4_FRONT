const events = [
  {
    id: 1,
    name: "AWS Summit Madrid 2025",
    description:
      "El evento sobre la tecnología en la nube de AWS en España. Es gratuito que atrae a profesionales y ejecutivos de diversas industrias interesados en conocer cómo AWS puede ayudarles a innovar de manera ágil.",
    images: [
      "https://canalexito.es/wp-content/uploads/2022/04/canalexito-aws.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0F34ZijmDHGRR3le5nnnhpNzjwm4U4FLuxyI2-iNNSXRLEkynl8mSuJX-BKR4OLUtLSY&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHgBRdLCXFfaP3sN7ZfZX00HNCILVtUUluJ5R8X-3NVaptwjlhsSbJGCoxeDM21Ve9Cc&usqp=CAU",
      "https://i.ytimg.com/vi/BSjOJsh4S68/maxresdefault.jpg",
      "https://i.ytimg.com/vi/2AMASTQyOvw/maxresdefault.jpg",
    ],
  },
  {
    id: 2,
    name: "CES (Consumer Electronics Show)",
    description:
      "La feria de tecnología más grande del mundo, donde las empresas presentan las últimas innovaciones en electrónica de consumo.",
    images: [
      "https://dandreavisual.com/wp-content/uploads/2022/11/CES-Las-Vegas-2.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgNRhp_yOrKnIWfuwWSIH30sz3XV2_YVyP1Or-OLELfh5UMaJ8y4VH1zqRtBvGXbrCfc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJ3WD0E5mPG5D79DLHN0T-lpSe8YnANPgo2vY7jwZWG835cvkoeXlu0fr6l79c_Zp-4Q&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKiE6660zrUG-lOWpo-EMwOiTiqRYUQykKoI534CGp8fMfkeywkssjgOIlz0J7Di4nnzw&usqp=CAU",
      "https://etimg.etb2bimg.com/photo/88556613.cms",
    ],
  },
  {
    id: 3,
    name: "Mobile World Congress",
    description:
      "Uno de los eventos más importantes de la industria móvil, celebrado en Barcelona, donde se presentan las últimas tendencias en telecomunicaciones y tecnología móvil.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMXLZ56ZCEQbXdPxTwU05lHF_y8SmNpg4lw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzP0I_Gu_PuSa7p25biF0Njo0dTy-yd5AEEFpYbJDg9ONj1RCtY-v1fn1xP9h665zBBI&usqp=CAU",
      "https://estaticos.elcolombiano.com/binrepository/1005x565/112c0/780d565/none/11101/SLIQ/colombia-en-feria-mobile-world-congress-2024_44515008_20240227143618.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOrH9PKLTm1H7jRpTlaTFi_BIwud19LMY9g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANd9cLMkS257aKXDQ8QVH-SgGTJtFD-98aQ&s",
    ],
  },
  {
    id: 4,
    name: "Art Basel",
    description:
      "Una de las ferias de arte más prestigiosas del mundo, con ediciones en Basilea, Miami y Hong Kong, donde se exhiben obras de artistas contemporáneos.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpuN5Xd5GN6YHCeGinrNVkOSFRh4UZ7ETNg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6FpnxF5rwicUSu6KLMU9uKS3k-LehQ3i-9UmfL9lsUEIIugptdeAM-7nJD4zZqTm3Yg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5EL2CmFf0c4KofbkE0dNBBWrqR3J4vJcmg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRch1ZspbpCd48nyEUVAr24v1Fy3s25e1_BnuxeVkSiA1MFPbAPgmJoF-8FT9EetvYN8rc&usqp=CAU",
      "https://s3.perrotin.com/vue/photo/43319.jpg?d=2048xauto",
    ],
  },
  {
    id: 5,
    name: "Salón del Automóvil de Ginebra – Suiza (Marzo)",
    description:
      "El Salón Internacional del Automóvil de Ginebra es un salón del automóvil que se celebra en el mes de marzo o abril en el Palexpo de Ginebra, Suiza. Es uno de los salones más importantes en Europa, junto con los de Fráncfort y París. .",
    images: [
      "https://previews.123rf.com/images/akulamatiau/akulamatiau1203/akulamatiau120300102/12572922-ginebra-suiza-08-de-marzo-2012-pagani-huayra-en-el-82o-sal%C3%B3n-del-autom%C3%B3vil-internacional-de.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6HoYRxYnjHfJE-aYhsKzYXRYU7P-gAWYz8W8B80jUHye19pOJHUvAz3XgFY2KiHnPOs&usqp=CAU",
      "https://thumbs.dreamstime.com/z/suiza-ginebra-de-marzo-pagani-zonda-hp-barchetta-t-118347549.jpg",
      "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/05/15518059829359.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70IJWEFkJFSYIzQhZrIc6qiEREiJkUsyp8jD130eh7cmvR0sqT-jChQ4nASE-dgqiZPU&usqp=CAU",
    ],
  },
  {
    id: 6,
    name: "Comic-Con International",
    description:
      "Convención de cultura pop en San Diego, donde se presentan avances de películas, series, cómics y videojuegos.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vn0ZDd2CErElW421as6un3CP0X3c6GU6SQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYvvmV2vjzyujz6T1SzV8mQm4If1HNc-6vA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpVmpIP1mhYNMLJp5yxxiaB8LbXm6abrncA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjfGy2BmdCslucAvIXVmNEQDJF5-EvltDvJtZqubdaGtFnFROkR_VzRb3P3gtcxvZl3eI&usqp=CAU",
      "https://www.kron4.com/wp-content/uploads/sites/11/2020/04/comic.jpg",
    ],
  },
  {
    id: 7,
    name: "Paris Fashion Week",
    description:
      "Uno de los eventos de moda más influyentes, donde las principales casas de moda presentan sus colecciones.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2WbVWGO1V5A5B-iwzUKzG5zEheGjsrL9JA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrFTRzONKF3u33RzvwewXyoVIo3gEPkAnOQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1grNkrD8maRhwxn-fsYoWhV9Kmoeh1BMbzXwvSzsdbzfRCo2EgOBZV3tOIvldz90sufw&usqp=CAU",
      "https://static.wixstatic.com/media/e4b4c7_8757e0fd6c71449095fe1e5e711c0fb6~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e4b4c7_8757e0fd6c71449095fe1e5e711c0fb6~mv2.jpg",
      "https://hips.hearstapps.com/hmg-prod/images/gigi-hadid-and-models-walk-the-runway-during-the-finale-of-news-photo-1664487635.jpg?crop=0.668xw:1.00xh;0.242xw,0&resize=1200:*",
    ],
  },
  {
    id: 8,
    name: "Tokyo Game Show",
    description:
      "Evento dedicado a la industria de los videojuegos, donde se presentan los últimos desarrollos de empresas japonesas y globales.",
    images: [
      "https://img.kyodonews.net/english/public/images/posts/357286df0977601fa8b28a913f5aa20b/photo_l.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIoG3jdC3er7noTiKDMyWtkpQgaL9IH0hR3Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4wxBBlkOLKlyCJJ-rMV_k8aG2DAdxCBA_W9CC2DjxO09csthKjJ8fcpK9AlPLx2sGRI&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jvPpGM00ZFUc9EILqzc3jU7R3kzQ5hBnbxvfeVV2XHCC2YRFZNpTehFeYNOHBnsdZiI&usqp=CAU",
      "https://japannews.yomiuri.co.jp/wp-content/uploads/2023/09/Game-show.jpg",
    ],
  },
  {
    id: 9,
    name: "Festival de Cannes",
    description:
      "El Festival de Cannes es un festival de cine de categoría A, celebrado anualmente en la ciudad francesa de Cannes, en la Riviera Francesa, Provenza-Alpes-Costa Azul. Está acreditado por la FIAPF, junto con los festivales de Berlín, San Sebastián, Mar del Plata, Karlovy Vary y Venecia, entre otros. Este festival, además de presentar filmes con presencia más independiente, también es el festival más importante de la industria europea del cine.",
    images: [
      "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/ZS3FUZB4L5CCDFVYDXVMDJZNTU.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePiAeMM7r9BkgrAOHGyHRp04gmkZrtpuxog&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQ4MxM5z_RyAik2DapGa5l4am2duYzyPVDQ&s",
      "https://media.istockphoto.com/id/526549773/es/foto/festival-de-cine-de-cannes.jpg?s=612x612&w=0&k=20&c=jDP6DdWpKlGhdsHwFm1smPAP8YkF7YEYfSnatUpZnVk=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcA33ZQgibX9w6F5DMkQPkCs7-LSCvmnRw&s",
    ],
  },
  {
    id: 10,
    name: "Tour de Francia",
    description:
      "El Tour de Francia (oficialmente Tour de France), también conocido simplemente como el Tour, es una vuelta por etapas profesional de ciclismo en ruta disputada a lo largo de la geografía francesa —aunque suele transcurrir parcialmente por los países vecinos—. Tradicionalmente se celebra en julio1​ y pertenece al calendario UCI WorldTour, máxima categoría de las carreras profesionales.",
    images: [
      "https://bicimex.com/storage/blog/230103131626_resumen-tour-de-francia.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjczxZXNwVJ4P7fiHV_6F4FSVNIgn-eqL6EA&s",
      "https://estaticos-cdn.prensaiberica.es/clip/3bbefd41-fff3-483b-84fa-01a449a64f11_alta-libre-aspect-ratio_default_0.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAvlXEL32jLg8tzCuDBJbDROqH2rxFgCTDg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zILl7PySOl0hlKiwC26ANPBI6ymbvf2FLw&s",
    ],
  },

  {
    id: 11,
    name: "Google I/O 2025",
    description:
      "Conferencia anual de Google en Mountain View sobre IA, Android y tecnologías emergentes para desarrolladores globales.",
    images: [
      "https://www.webtechsolution.org/wp-content/uploads/Google-IO-2025.jpg",
      "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2025/02/google-i-4292803.jpg?tf=1080x",
    ],
  },
  {
    id: 12,
    name: "Bienal de Venecia 2025",
    description:
      "Evento de arquitectura bajo el tema 'Inteligencia Natural y Artificial', con proyectos de 80 países en arsenales y jardines venecianos.",
    images: [
      "https://statics.forbesargentina.com/2022/10/crop/63593af8d773c__980x549.webp",
      "https://images.unsplash.com/photo-1667476156948-101409a866c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.adsttc.com/media/images/67ab/4412/ea72/f101/8803/472a/slideshow/2025-venice-architecture-biennale-over-750-participants-researching-how-architecture-adapts-to-the-future_1.jpg?1739277394",
    ],
  },
  {
    id: 13,
    name: "EXPO 2025 Osaka",
    description:
      "Exhibición global en la isla Yumeshima con innovaciones en sostenibilidad, salud y tecnología de 150 países participantes.",
    images: [
      "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/activities/rzcjnzuefpaqwnl99aps.webp",
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_800,h_600/activities/k1nbsfpmhqdkksjdvelg/Expo2025Osaka,Kansai,JapanTour(%C2%A9Expo2025APPROVALTR00007-2).webp",
    ],
  },
  {
    id: 14,
    name: "Bienal de Artes Islámicas 2025",
    description:
      "Exhibición en Yeda que combina arte tradicional islámico con instalaciones digitales en la Terminal de Hajj (UNESCO).",
    images: [
      "https://qmwebsiteprodstorage.blob.core.windows.net/media/images/Isalmic-art_1.2e16d0ba.fill-2960x1850.jpg",
      "https://darcawards.com/wp-content/uploads/2024/01/02_gallery_view1.jpg",
    ],
  },
  {
    id: 15,
    name: "BOG25 - Bienal de Bogotá",
    description:
      "Primera edición de la Bienal Internacional de Arte con intervenciones urbanas en espacios públicos de Bogotá.",
    images: [
      "https://bogota.gov.co/sites/default/files/inline-images/invitacion-oficial-bog25_0.jpeg",
      "https://bogota.gov.co/sites/default/files/styles/1050px/public/eventos/2024-12/bienalinternacionaldeartedebogota2025.png",
    ],
  },
  {
    id: 16,
    name: "Milan Design Week 2025",
    description:
      "Evento líder en diseño con exhibiciones en distritos como Brera y Tortona bajo el tema 'Mundos Conectados'.",
    images: [
      "https://czk.si/wp-content/uploads/2024/08/we-are-looking-for-curatorial-proposals-for-milan-design-week-2025-2048x1152.png",
      "https://image.architonic.com/imgTre/03_15/9_Meroni_federico.jpg",
      "https://image.architonic.com/imgTre/03_15/21_Molchanova_Natalia.jpg",
    ],
  },
  {
    id: 17,
    name: "FITUR 2025",
    description:
      "Feria internacional de turismo en Madrid con Brasil como país socio, promoviendo destinos y tecnologías innovadoras.",
    images: [
      "https://profesional.andalucia.org/sites/default/files/2024-11/Logo%20Fitur%202025_1080X1920.jpg",
      "https://www.hola.com/horizon/square/306970fb8405-fitur.jpg?im=Resize=(960),type=downsize",
    ],
  },
  {
    id: 18,
    name: "Trienal de Milán 2025",
    description:
      "Explora desigualdades urbanas a través de instalaciones en el Palazzo dell'Arte bajo dirección de Stefano Boeri.",
    images: [
      "https://cdn.mos.cms.futurecdn.net/aHg6SiGF4N6rUXFGJwDiGW-1024-80.jpg.webp",
      "hhttps://cdn.mos.cms.futurecdn.net/hEVByf6pBfYHzgo7NZrY4M-1600-80.jpg.webp",
    ],
  },
  {
    id: 19,
    name: "World Architecture Festival 2025",
    description:
      "Festival en Lisboa premiando diseños innovadores enfocados en resiliencia climática y soluciones sociales.",
    images: [
      "https://architektura.info/var/architektura/storage/images/wiadomosci/konkursy_architektoniczne/world_architecture_festival_2025/2801758-1-pol-PL/world_architecture_festival_2025_catalog_articles_item_main.jpg",
      "https://tbcevents.pt/wp-content/uploads/2024/01/969dc8b6cc4bce6a68e73cf523056f09-scaled.webp",
      "https://tbcevents.pt/wp-content/uploads/2024/01/1.webp",
    ],
  },
  {
    id: 20,
    name: "Bienal de Chicago 2025",
    description:
      "Evento que aborda cambios radicales en arquitectura con exposiciones en el Chicago Cultural Center y espacios urbanos.",
    images: [
      "https://www.chicago.gov/content/dam/city/depts/dca/cab/cab.png",
      "https://media.architecturaldigest.com/photos/5d6eb1918d7f2200080bdc06/16:9/w_1920,c_limit/GettyImages-511665488.jpg",
    ],
  },
];

export default events;
