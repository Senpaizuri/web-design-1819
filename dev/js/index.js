(()=>{
    const
        storyBlocks = document.querySelectorAll("article > div"),
        config = {
            root:null,
            rootMargin: "0px",
            treshold:.01
        }
    
    let 
        enhanceStory = (entries)=>{
            entries.forEach(entry=>{
                const prevRatio = entry.target.getAttribute("data-ratio")
                if(entry.intersectionRatio > prevRatio){
                    entry.target.classList.add("active")
                }else{
                    entry.target.classList.remove("active")
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