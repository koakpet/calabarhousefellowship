import Posts from "@/components/Posts";
import Post from "@/components/documents/post_1";

export default function About() {
  return (
    <>
      <Posts
        topic={Post.topic}
        author={Post.author}
        date={Post.date}
        introText={Post.introText}
        introSource={Post.introSource}
        p1={Post.paragraph_1}
        p2={Post.paragraph_2}
        p3={Post.paragraph_3}
        p4={Post.paragraph_4}
        p5={Post.paragraph_5}
      />
    </>
  );
}
