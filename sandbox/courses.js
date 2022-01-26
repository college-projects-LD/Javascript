  const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    logo: "imges/linuxlogo.png",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
  };
  //alertStudent: function() {
    //alert('Hi Student');
  //}
  let fruit = ['bannana','apple', 'orange'];
  //images
  document.querySelector('img').setAttribute('src' , aCourse.logo);
  document.querySelector('img').setAttribute('alt' , 'linux logo');

  //change attribute in js

  aCourse.code = 'CSE121';
  fruit.sort();

  console.log(fruit);


  let auto = [
     {name: 'volvo',color:'blue', top_speed : '143MPH'},
     {name: 'tesla', color: 'silver', top_speed : '201mph'},
     {name: 'lambo', color: 'black', top_speed: '256MPH'}]

     function obj_sort(a,b){
         if (a.color < b.color){
         return -1;
         } else if (a.color>b.color){
             return 1;
         } else {
             return 0;
         };
     };
     auto.sort(obj_sort);
     console.log(auto);



     const animals = [
        {
          "name": "Meowsy",
          "species" : "cat",
          "foods": {
            "likes": ["tuna", "catnip"],
            "dislikes": ["ham", "zucchini"]
          }
        },
        {
          "name": "Barky",
          "species" : "dog",
          "foods": {
            "likes": ["bones", "carrots"],
            "dislikes": ["tuna"]
          }
        },
        {
          "name": "Purrpaws",
          "species" : "cat",
          "foods": {
            "likes": ["mice"],
            "dislikes": ["cookies"]
          }
        }
      ]


      console.log(animals[1].name + ' likes ' + animals[1].foods.likes[0]);


  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);