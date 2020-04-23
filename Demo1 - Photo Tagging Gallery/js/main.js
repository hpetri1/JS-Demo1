// Enter your JavaScript for the solution here...

window.addEventListener("load", function(){
    
    var imageOject1={
        id:"0",
        src:"img/athens.png",
        alt: "Athens",
        title:"The Parthenon in Athens"
    }

    var imageOject2={
        id:"1",
        src:"img/barcelona.png",
        alt: "Barcelona",
        title:"Sunrise on Barcelona"
    }

    var imageOject3={
        id:"2",
        src:"img/lisbon.png",
        alt: "Lisbon",
        title: "View across Lisbon"
    }
    
    var dataArray=[];
    var tagArray1=[];
    var tagArray2=[];
    var tagArray3=[];

    dataArray.push(imageOject1);
    dataArray.push(imageOject2);
    dataArray.push(imageOject3);

    var thumbnailsimg1 = document.querySelector("ul.thumbnails li:first-of-type img");
    var thumbnailsimg2 = document.querySelector("ul.thumbnails li:nth-of-type(2) img");
    var thumbnailsimg3 = document.querySelector("ul.thumbnails li:last-of-type img")
    var imageTitle = document.querySelector("h2.title");
    var targetImage = document.querySelector('.editor img');
    var submitTagButton = document.querySelector('form input:last-of-type');
    var errorDisplay = document.querySelector('p.error');
    var tagDisplay = document.querySelector('p.tags');
    var formInput = document.querySelector('form');
    
    thumbnailsimg1.setAttribute("data-index", "0");
    thumbnailsimg2.setAttribute("data-index", "1");
    thumbnailsimg3.setAttribute("data-index", "2");
    targetImage.setAttribute("data-set", "");

    thumbnailsimg1.addEventListener('click', onClickImageChange);
    thumbnailsimg2.addEventListener('click', onClickImageChange);
    thumbnailsimg3.addEventListener('click', onClickImageChange);
    submitTagButton.addEventListener('click', validateForm);
    
    
    function onClickImageChange(e){
        var dataIndex = e.currentTarget.dataset.index;
        switch(dataIndex){
                case "0":  setDisplay(dataArray[0]);
                            tagDisplay.innerHTML = thumbnailsimg1.dataset.tags;
                            errorDisplay.classList.add("hidden");
                            formInput.reset();
                            break;
                case "1":  setDisplay(dataArray[1]);
                            tagDisplay.innerHTML = thumbnailsimg2.dataset.tags;
                            errorDisplay.classList.add("hidden");
                            formInput.reset();
                            break;
                case "2":  setDisplay(dataArray[2]);
                            tagDisplay.innerHTML = thumbnailsimg3.dataset.tags;
                            errorDisplay.classList.add("hidden");
                            formInput.reset();
                            break;
            }
    }   

    function setDisplay(obj){
      targetImage.src = obj.src;
      targetImage.alt = obj.alt;
      targetImage.title = obj.title;
      imageTitle.innerHTML = obj.title;
      targetImage.dataset.set = obj.id;
    }

    function validateForm(e) {
        var x = document.getElementById('tag').value;
        var tagsSetId = targetImage.dataset.set;
        
        e.preventDefault();

        if (x == "") {
            errorDisplay.classList.remove("hidden");
            errorDisplay.innerHTML = "Unable to add an empty tag";
           return false;  
        }

        else if(x.indexOf(' ') > -1)
        {
            errorDisplay.classList.remove("hidden");
            errorDisplay.innerHTML = "Empty space in tags is not allowed";
            return false;
        }

        else{

            errorDisplay.classList.add("hidden");

            if(tagsSetId == 0){
            tagArray1.push(' #' + x);
            thumbnailsimg1.setAttribute("data-tags", tagArray1);
            thumbnailsimg1.dataset.tags;
            tagDisplay.innerHTML = thumbnailsimg1.dataset.tags;
            formInput.reset();
            }
            else if(tagsSetId == 1){
                tagArray2.push(' #' + x);
                thumbnailsimg2.setAttribute("data-tags", tagArray2);
                thumbnailsimg2.dataset.tags;
                tagDisplay.innerHTML = thumbnailsimg2.dataset.tags;
                formInput.reset();
                }
                else if(tagsSetId == 2){
                    tagArray3.push(' #' + x);
                    thumbnailsimg3.setAttribute("data-tags", tagArray3);
                    thumbnailsimg3.dataset.tags;
                    tagDisplay.innerHTML = thumbnailsimg3.dataset.tags;
                    formInput.reset();
                    }
        }
    }
})

