import React from "react";

function page() {
  return (
    <main className="bg-orange-200 h-[80vh] text-2xl">
      <div className="grid grid-cols-3 gap-4 ml-40 cursor-pointer pt-16 ">
        <div className="h-80 w-72  items-center text-base p-4  " >
          <h1 >Cooking</h1>
          <p >
           It is often said that mothers are the best cooks because they have a
            lot of experience and knowledge when it comes to cooking.
          </p>
        </div>

        <div className="h-80 w-72  text-base p-4 ">
          <h1>Teaching</h1>
          <p>
            Mothers are the key teachers of all moral values and attitudes that
            the child will later display. The child looks up to his mother in
            everything she does. 
          </p>
        </div>

        <div  className="h-80 w-72 text-base p-4 ">
          <h1>Cleaning</h1>
          <p>
            Mothers are guardian angels for their children, always loving and
            supporting them.This is why a child and their mother will have such a
            strong attachment.
          </p>
        </div>

        <div className="h-80 w-72  text-base p-4 ">
          <h1>Playing</h1>
          <p>
            Play improves the cognitive, physical, social, and emotional
            well-being of children . They also learn skills they
            need for study, work and relationships such as: confidence.
          </p>
        </div>

        <div className="h-80 w-72 text-base p-4">
          <h1>Nursing</h1>
          <p>
             The family&#39;s equilibrium or health status by
            helping the family to avoid or to cope with stressors or threats to
            health
          </p>
        </div>

        <div className="w-72 h-80 text-base p-4 ">
          <h1>Working</h1>
          <p>
            As a working mom, I struggle to balance work and home life. On the
            one hand, you want to give your best at work and climb the corporate
            ladder. 
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
