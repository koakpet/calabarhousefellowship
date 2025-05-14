import Posts from "@/components/Posts";
import Post from "@/components/documents/info";
import Subscribe from "@/components/Subscribe";
import Dropdown from "@/components/Dropdown";

export default function About(props) {
  return (
    <>
      <div className="px-6 pt-20 pb-9 md:p-12">
        <h2 className="text-left md:text-center">WHO WE ARE</h2>
        <h4 className="hidden md:block md:text-center md:px-20 md:py-6">
          "How beautiful upon the mountains are the feet of him that bringeth
          good tidings, that publisheth peace; that bringeth good tidings of
          good, that publisheth salvation; that saith unto Zion, Thy God
          reigneth!"
        </h4>
        <p className="hidden md:block md:text-center text-xl font-bold">
          Isaiah 52:7 (KJV)
        </p>
      </div>
      <div className="bg-neutral-100 px-5 py-12 md:p-20">
        <div className="flex flex-col items-center md:flex-row md:justify-around items-start">
          <div className="p-6 md:hidden">
            <Dropdown name="Explore More Posts" />
          </div>
          <div className="md:w-8/12 flex-initial">
            <div className="mt-20 mb-3 md:mt-6">
              <h2 className="mb-3">{props.topic}</h2>
              <sup className="text-sm md:text-base">
                {props.author} &nbsp;&nbsp;&nbsp; {props.date}
              </sup>
            </div>
            <section className="border-t border-neutral-300 pt-8 md:border-t-0 md:pt-3">
              <h3>Welcome</h3>
              <p>
                Dear believer and fellow labour in the vineyard of the Father,
                we pray this greeting finds you growing in the grace and
                knowledge of our Lord and Saviour Jesus Christ, “who abolished
                death and brought life and immortality to light through the
                gospel” (II Timothy 1:10).{" "}
              </p>
              <p>
                Calabar House Fellowship is a body of believers in the finished
                work of Jesus Christ united by the biblical call to 'Come out of
                Babylon'. This phrase, found in Revelation 18:4, serves as both
                a spiritual mandate and a guiding principle for the fellowship.
                The group's mission is commited by teaching and instructing to
                encourage believers to live distinctively, separating themselves
                from worldly influences and embracing a life fully surrendered
                to Christ.
              </p>
              <p>
                <b className="underline">Vision and Mission</b>
                <br />
                Our VISION is to create a community where members are deeply
                rooted in their faith, empowered by the Holy Spirit, and
                committed to living out biblical values in every aspect of their
                lives. The group aims to be a spiritual haven where believers
                can grow, serve, and worship together, free from the
                distractions and corruptions of the world.
              </p>
              <p>
                <b className="underline">Core Values</b>
              </p>
              <ol className="list-decimal mx-9 paragraph">
                <li>
                  Holistic Spiritual Growth: The fellowship emphasizes the
                  importance of spiritual maturity, encouraging members to
                  deepen their relationship with God through prayer, Bible
                  study, and fellowship.
                </li>
                <li>
                  Separation from Worldly Influences: Inspired by the call to
                  "Come out of Babylon," the group teaches its members to live
                  lives that reflect the values of the Kingdom of God, rather
                  than conforming to worldly standards.
                </li>
                <li>
                  Community and Accountability: Calabar House Fellowship fosters
                  a sense of community among its members, providing a supportive
                  environment where believers can encourage and hold one another
                  accountable in their spiritual journeys.
                </li>
                <li>
                  Service and Outreach: The group is committed to serving
                  others, both within and outside the church, reflecting the
                  love and compassion of Christ in their actions.
                </li>
              </ol>
              <p>
                Impact Calabar House Fellowship seeks to be a beacon of hope and
                spiritual renewal, inspiring its members to live lives that
                honor God and reflect the transformative power of the Gospel. By
                embracing the call to "Come out of Babylon," the group aims to
                be a community that stands apart, shining a light in a world in
                need of the hope and salvation found in Christ. Through its
                commitment to spiritual growth, community, and service, Calabar
                House Fellowship is dedicated to making a lasting impact on the
                lives of its members and the world around them.
              </p>
              <p>
                Sincerely, <br />
                <i>Your brethren in Christ.</i>
              </p>
            </section>
          </div>
          <div className="hidden md:block w-3/12 flex-initial bg-neutral-300 rounded-lg"></div>
        </div>
      </div>
      <Subscribe />

      {/* <Posts
        title={Post.title}
        introText={Post.introText}
        introSource={Post.introSource}
        p1={Post.paragraph_1}
        p2={Post.paragraph_2}
        p3={Post.paragraph_3}
        p4={Post.paragraph_4}
        p5={Post.paragraph_5}
      /> */}
    </>
  );
}
