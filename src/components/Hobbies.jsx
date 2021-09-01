import React from 'react'

const Hobbies = () => {
    return (
        <div>
            <section>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="lg:h-100 h-full w-full bg-red-100" style={{ background: "url('../assets/images/books2.jpg') no-repeat center / cover"}}>
                       
                    </div>

                    <div className="lg:h-100 h-full w-full bg-gray-100 text-left ml-20">
                        <h1 className="lg:pt-28 pt-20 text-red-100">Books.</h1>
                        <p>
                            Books have been a huge part of Kondwani's learning process.
                             He especially likes to dabble in personal development books.

                        </p>

                        <p>
                            Some of his favourite books are 
                           <li> Think and Grow Rich by Napoleon Hill</li> 
                           <li> Atomic Habits by James Clear</li> 
                            <li>The Win Without Pitching Manifesto by Blair Enns </li>
                            <li> The Psychology of Money by Morgan Housel </li>
                            <li> Thinking Fast and Slow by Daniel Kahneman </li> 
                            <li> The Subtle Art of Not Giving a F*ck by Mark Manson. </li> 
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hobbies
