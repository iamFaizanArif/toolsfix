import React from 'react'
const ReviewCard = ({name,title,photo}) => {
  return(
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full mt-14">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team"
                   className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                   src={photo}
                   onError={({ currentTarget }) => {
                       currentTarget.onerror = null; // prevents looping
                       currentTarget.src =
                           "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png";
                   }}/>
              <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">{name}</h2>
                  <p className="text-gray-500">{title}</p>
              </div>
          </div>
          {/*<footer className="mt-4">*/}
          {/*    <p className="text-xs text-gray-500">John Doe - 12th January, 2024</p>*/}
          {/*</footer>*/}
      </div>

  )
}
const Review = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Customers Feedback</h1>
                </div>
                <div className="flex flex-wrap -m-2">

                <ReviewCard name="Salman" title="Thank you so much ! ye bohat kamaal ky tools hain, kuch mai ny daikhy hain, kuch ka mujy ni pta un ka kya use h, wo mai search kr lu ga, but really really thank you." photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/130074338_224775095682323_1298863729111465021_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeGrxIuUEuvsT5RfAih3ZOENZlT2gdy0vMhmVPaB3LS8yI6wjasVLhSVjdV7j_99uW8_9XLV0vnEWcwa1O2W7cmI&_nc_ohc=pofEGUeYd00AX_GRhDW&_nc_ht=scontent.flhe13-1.fna&oh=00_AfBZSfzjZf8nrOQozH1McuCH74n9gks1NsO94a47ZuYleA&oe=643C4EFA"/>
                <ReviewCard name="Saqib Ali" title="I bought envatoelments subscription and its working perfectly, Great service
i will give 10/10" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/91587393_103800751285900_148332777241051136_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEkv0e7q-vZs1L15LEx4K3yDZhkfm8DmCYNmGR-bwOYJgzipQWXO8fWtCxhq7E98VFvoymBwvfRtp5gpFvPu_gq&_nc_ohc=kCvZy05hk0YAX-MoCDj&_nc_ht=scontent.flhe13-1.fna&oh=00_AfBj5EiKRX82Vl70TQY-EmrF8QlBILNp8VX9ntqkcsQb2w&oe=643C57BC"/>
                <ReviewCard name="Basim" title="Very Supportive for new user" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/267527928_3162978923947068_5313926805705184713_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFomkqauj1yIFfpa1qomzoMnco8wc6PYaOdyjzBzo9ho7JZ0W4Tu6CP3rOKzQN2Ld7ivg6K44NoRL0uAOp5BRh7&_nc_ohc=gTuzcqMlSlwAX8CwTZJ&_nc_ht=scontent.flhe13-1.fna&oh=00_AfD__46tPAiS1TJWAZ9_KIUP08CQNt4DDnK8TIuw8b6yEw&oe=641AC04C"/>
                <ReviewCard name="Myiank" title="thanks buddy" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/286979904_1060291617912392_619431222734983082_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG5-RrY-4ZIupoyIGbs0OshD6kHey6zmaQPqQd7LrOZpKwe4S85IWSPg9pXUXJav6Jw7vuIdPf8m2MgId2ueQ_-&_nc_ohc=RN6k6xyNn-IAX_a3kfe&_nc_ht=scontent.flhe13-1.fna&oh=00_AfCEZBInaYA_QrOWs50O_YyYlMJgF6ecPe4zEH_mgu2KOA&oe=6419B738"/>
                <ReviewCard name="Shahzad Roy" title="Full sport  thanks janab etny help k ly" photo=" https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/66345722_871620929884377_5750475968233865216_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFf2ede6Edc5EJafnlboS4lWPUxzCiBGRxY9THMKIEZHKLIaxa7sqTJuTUsZss6zYBvWzTgBTSptmOa4cABBKwh&_nc_ohc=ZWTl2HG9868AX8moXq2&_nc_ht=scontent.flhe13-1.fna&oh=00_AfAMWVb5Eo5XegnQEst28wtep_JkKazF-KL7bK0CxIE7VA&oe=643C4C52"/>
                <ReviewCard name="Zaman Ali" title="Mein 1 month se Toolsfix ki services le raha hu bht acha services de rehe hai or cheapest prices mein mein appreciate krta hu i recommend to everyone use this and save your money" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/202468577_2859032701013049_6460088986864815330_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHQ2GQVq_RLqMxcBjuCXbGVSQYi-vLReDxJBiL68tF4PC1cNKyRo5kIb_7KP9au9z9oMwoAD0Ya4uhe_mapbLhs&_nc_ohc=n4pNarMqTuMAX_V_rz7&_nc_ht=scontent.flhe13-1.fna&oh=00_AfDWOsH4KSH4fp1xqO9m_S162i8KrHr2ItVcJ9OmWcZaSg&oe=643C6BA9"/>
                <ReviewCard name="Samran Sajawal" title="Lovely service, cheapest in pakistan" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/211421684_2995115014053603_4827921723620975472_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeErfOgy3clJPQgfuHqFHqSwzl12Ex_AKEjOXXYTH8AoSDdiHcvwl9YFC4J2vDT_4JcZfguGKB_37MaBkhIcKpDP&_nc_ohc=cAbU23D6SJUAX9bKNwz&_nc_ht=scontent.flhe13-1.fna&oh=00_AfCCvD1nolYo9dOj3nzL3hypMpKJ8k_jSr8Vk8F6c9kW9g&oe=641AD8AF"/>
                <ReviewCard name="Aanand" title="Bahi yh loog sbsy sasti service de rhy hu bakio ke compaction me" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/317363873_1787716164945965_6302843254831142170_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFBVOB7WUmzS_v7aLV_UtmPSFSUMFD3Mw5IVJQwUPczDv8YuWxU3siEfp96kMDyP9l7I_gRGDr_D0eiW_m0lBix&_nc_ohc=cFrD0mmHnVIAX-OLnmR&_nc_ht=scontent.flhe13-1.fna&oh=00_AfA6jQ34z7IaFgx3FOtjaKOQAOQqZ9wbX4pg38XZPv_xlQ&oe=641A5BE4"/>
                <ReviewCard name="Haris Amjad" title="Mjy phly to lga yh scammer ha itni km prise kesy phr inho ne jb mjy demo dia to mny foran se buy ki yr achi khasi cheap service sr rhy hu" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/317852962_1596972127401801_8514794578871171654_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH0YAKa5R8s3ZHsFifiaEoy7z2YbmUs-lvvPZhuZSz6W5jK8dD3oyQg6a8ppH9gpadVU7vN4zoYN3PU7OZFLajq&_nc_ohc=0uBUOP81cB4AX9Nx0ky&_nc_ht=scontent.flhe13-1.fna&oh=00_AfBzKum3LkZuR180L9XB2jN6Bzj5dz_4zMEZLcZZCfGcMA&oe=6419294E"/>
                <ReviewCard name="Gondal" title="Recommended" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/319862087_1823699737989698_512058404354751498_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGBA77BcLtWDArMiChfZZGKIjMap5cGS9QiMxqnlwZL1Em9OCYjGlKeNGXwt8xdUJSxt6gAZMjUvnQhYOYVboDa&_nc_ohc=FmXC2d4WqoAAX_2125F&_nc_ht=scontent.flhe13-1.fna&oh=00_AfBXLiv_04ZZ4xypf1kxU2Q4tontYgyGP-iX0nyBgxszmg&oe=641A49A6"/>
                <ReviewCard name="Rana Ahsan" title="Using from 20 days bhoot jaldi issue resolve kr dety hu because yh tools stable ni hoty lakin yh loog such bta dety hu ignore ni krty" photo="https://scontent.flhe13-1.fna.fbcdn.net/v/t31.18172-8/25587797_113044829491958_6971833296875478145_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeGc-FAqrjM7Yxmev3B53I1sp_HtTdc1VYqn8e1N1zVVivmbMRoo_lVY3y9dAr0khp1bCysG6ouWJRAa2ekwpBtp&_nc_ohc=DEkjBToxvfkAX8AKgM1&_nc_ht=scontent.flhe13-1.fna&oh=00_AfCAdKI4s4YBAF_9uHtNW0pALxyj0tIHgla5Mv6EdbCCNg&oe=643C52D2"/>
                </div>
            </div>
        </section>
)
}

export default Review