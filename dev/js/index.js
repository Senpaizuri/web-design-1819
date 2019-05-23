(()=>{
    const
        storyBlocks = document.querySelectorAll("article > div"),
        config = {
            root:null,
            rootMargin: "0px",
            treshold:.01
        },
        wordBlocks = Array.from(storyBlocks).forEach(word=> word.innerHTML.split(""))
    let 
        enhanceStory = (entries)=>{
            entries.forEach(entry=>{
                const prevRatio = entry.target.getAttribute("data-ratio")
                if(entry.intersectionRatio > prevRatio){
                    entry.target.classList.add("active")
                    document.querySelector(`#people .${entry.target.classList[0]} .brow`).classList.add(entry.target.getAttribute("data-mood"))
                    document.querySelector(`#people .ira .face`).classList.remove("mark","elna","ira")
                    document.querySelector(`#people .mark .face`).classList.remove("mark","elna","ira")
                    document.querySelector(`#people .elna .face`).classList.remove("mark","elna","ira")
                    switch(entry.target.nextElementSibling.classList[0]){
                        case "ira":
                            document.querySelector(`#people .mark .face`).classList.add("ira")
                            document.querySelector(`#people .elna .face`).classList.add("ira")
                        break;
                        case "elna":
                            document.querySelector(`#people .mark .face`).classList.add("elna")
                            document.querySelector(`#people .ira .face`).classList.add("elna")
                        break;
                        case "mark":
                            document.querySelector(`#people .ira .face`).classList.add("mark")
                            document.querySelector(`#people .elna .face`).classList.add("mark")
                        break;
                    }
                }else{
                    entry.target.classList.remove("active")
                    document.querySelector(`#people .${entry.target.classList[0]} .brow`).classList.remove("suprise","worried","mad","question")
                }
                entry.target.setAttribute("data-ratio",entry.intersectionRatio)
            })
        },
        observer = new IntersectionObserver(enhanceStory,config)


    storyBlocks.forEach(block =>{
        observer.observe(block)
    })

    const
        questions = document.querySelectorAll(".q")
    
    questions.forEach(el=>{
        const 
            content = el.innerHTML,
            contArr = content.split("")
        
        el.innerHTML = ""

        contArr.forEach((child,i)=>{
            const newSpan = document.createElement("span")
            newSpan.innerHTML = child
            newSpan.style.setProperty("transform",`translateY(-${i*.05}rem) rotate(${i*2}deg)`)
            el.appendChild(newSpan)
        })
        
    })
})()