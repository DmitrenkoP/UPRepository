var photoPosts = [

    {
  
      id: '1',
  
      descriprion: 'post1 description',
  
      createdAt: new Date('2018-02-23T23:00:00'),
  
      author: 'A',
  
      photoLink: 'post1.jpg'
  
     },
  
     {
  
       id: '2',
  
       descriprion: 'post2 description',
  
      createdAt: new Date('2018-02-24T23:00:00'),
  
      author: 'B',
  
      photoLink: 'post2.jpg'
  
     },
  
  
     {
  
       id: '3',
  
       descriprion: 'post3 description',
  
      createdAt: new Date('2018-02-25T23:00:00'),
  
      author: 'C',
  
      photoLink: 'post3.jpg'
  
     },
  
      {
  
       id: '4',
  
       descriprion: 'post4 description',
  
      createdAt: new Date('2018-02-26T23:00:00'),
  
      author: 'D',
  
      photoLink: 'post4.jpg'
  
     },
      {   
  
       id: '5',
  
       descriprion: 'post5 description',
  
      createdAt: new Date('2018-02-27T23:00:00'),
  
      author: 'E',
  
      photoLink: 'post5.jpg'
  
     },
      {
  
       id: '6',
  
       descriprion: 'post6 description',
  
      createdAt: new Date('2018-02-28T23:00:00'),
  
      author: 'F',
  
      photoLink: 'post6.jpg'
  
     },
      {
  
       id: '7',
  
       descriprion: 'post7 description',
  
      createdAt: new Date('2018-03-01T23:00:00'),
  
      author: 'G',
  
      photoLink: 'post7.jpg'
  
     },
  {
  
       id: '8',
  
       descriprion: 'post8 description',
  
      createdAt: new Date('2018-03-02T23:00:00'),
  
      author: 'H',
  
      photoLink: 'post8.jpg'
  
     },
  {
  
       id: '9',
  
       descriprion: 'post9 description',
  
      createdAt: new Date('2018-03-03T23:00:00'),
  
      author: 'I',
  
      photoLink: 'post9.jpg'
  
     },
  {
  
       id: '10',
  
       descriprion: 'post10 description',
  
      createdAt: new Date('2018-03-04T23:00:00'),
  
      author: 'J',
  
      photoLink: 'post10.jpg'
  
     },
  {
  
       id: '11',
  
       descriprion: 'post11 description',
  
      createdAt: new Date('2018-03-05T23:00:00'),
  
      author: 'K',
  
      photoLink: 'post11.jpg'
  
     },
  {
  
       id: '12',
  
       descriprion: 'post12 description',
  
      createdAt: new Date('2018-03-06T23:00:00'),
  
      author: 'L',
  
      photoLink: 'post12.jpg'
  
     },
  {
  
       id: '13',
  
       descriprion: 'post13 description',
  
      createdAt: new Date('2018-03-07T23:00:00'),
  
      author: 'M',
  
      photoLink: 'post13.jpg'
  
     },
  {
  
       id: '14',
  
       descriprion: 'post14 description',
  
      createdAt: new Date('2018-03-08T23:00:00'),
  
      author: 'N',
  
      photoLink: 'post14.jpg'
  
     },
  {
  
       id: '15',
  
       descriprion: 'post15 description',
  
      createdAt: new Date('2018-03-09T23:00:00'),
  
      author: 'O',
  
      photoLink: 'post15.jpg'
  
     },
  {
  
       id: '16',
  
       descriprion: 'post16 description',
  
      createdAt: new Date('2018-03-10T23:00:00'),
  
      author: 'P',
  
      photoLink: 'post16.jpg'
  
     },
  {
  
       id: '17',
  
       descriprion: 'post17 description',
  
      createdAt: new Date('2018-03-11T23:00:00'),
  
      author: 'Q',
  
      photoLink: 'post17.jpg'
  
     },
  {
  
       id: '18',
  
       descriprion: 'post18 description',
  
      createdAt: new Date('2018-03-12T23:00:00'),
  
      author: 'R',
  
      photoLink: 'post18.jpg'
  
     },
  {
  
       id: '19',
  
       descriprion: 'post19 description',
  
      createdAt: new Date('2018-03-13T23:00:00'),
  
      author: 'S',
  
      photoLink: 'post19.jpg'
  
     },
  {

       id: '20',
       descriprion: 'post20 description',
      createdAt: new Date('2018-03-14T23:00:00'),
      author: 'T',
      photoLink: 'post20.jpg'
     }
  
  ];
  
  let moduleFirst = (function(){
      var sortedPhotoPosts = photoPosts.sort((post1, post2) => {
          return post2.createdAt - post1.createdAt;
      });
  
  let getPhotoPost = function(id){
      if (typeof id !== "string") {
              console.log("invalid argument");
              return;
          }
  
      for (var i = 0; i < photoPosts.length; i++) {
              if (photoPosts[i].id === id) {
                  return photoPosts[i];
              }
          }
          return false;
  
  }
  
   let validatePhotoPost = function (photoPost) {
          if (typeof photoPost.id !== 'string' || photoPost.id === "") {
              return false;
          }
          if (typeof photoPost.author !== 'string' || photoPost.author === "") {
              return false;
          }
          if (typeof photoPost.description !== 'string' || photoPost.description.length > 200) {
              return false;
          }
          if (!(photoPost.createdAt instanceof Date)) {
            return false;
        }
          if (typeof photoPost.photoLink !== 'string' || photoPost.photoLink === '') {
              return false;
          }
          return true;
      }
  
  
      let addPhotoPost = function (photoPost) {
          if (validatePhotoPost(photoPost)) {
              photoPosts.push(photoPost);
              sortedPhotoPosts = photoPosts.sort((post1, post2) => {
                  return post2.createdAt - post1.createdAt;
              });
              return true;
          } else return false;
  
      }
  
  
  let getPhotoPosts=function(skip, top, filterConfig){
        skip = skip || 0;
        top = top || 10;
        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log("invalid argument!");
            return;
        }
        filterConfig = filterConfig || {};
        var ans = sortedPhotoPosts.filter(post => {
            if (filterConfig.hasOwnProperty("author")) {
                if (filterConfig.author === post.author) {
                    return true;
                } else {
                    return false;
                }
            }
            return true;
        });
        
        return ans.slice(skip, top + skip);
  }
  let removePhotoPost = function (id) {
    if (typeof id !== "string" || id === "") {
        console.log("invalid argument!");
        return;
    }
    for (var i = 0; i < photoPosts.length; i++) {
        if (photoPosts[i].id === id) {
            photoPosts.splice(i, 1);
            return "post deleted";
        }
    }
    return false;
}

  return{
    getPhotoPost,
    getPhotoPosts,
    addPhotoPost,
    validatePhotoPost,
    removePhotoPost
}
})();