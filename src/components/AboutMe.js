export default function AboutMe() {
    return (
        <div className="container-about-me">
           <div>  
             <img
              style={{ width: "160px", height: "160px", borderRadius: "80px", padding: "5px"}}
              src={require("../IMG_0112.png")} alt="picture of my face"/>
            </div>
            <div className="info-box"></div>
            <div className="my-info-fluid d-flex justify-content-end text-bg-secondary p-3">Hello World! I am Christopher. I am very excited to take the next step into Computer Technology.
            I really love the process of completing tasks that require computational thought. I made the bold decision about a year ago to change
            not only my career path, but to challenge myself in a completely field. Over time I will add to this profile to demonstrate my skills.
            I take particular pride in my ability to work with others in a team.</div>
        </div>

            
        


    )
} 