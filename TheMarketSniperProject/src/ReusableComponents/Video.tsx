export default function Video() {
  return (
      <video className="w-full h-full object-cover absolute top-0 -z-50" autoPlay muted loop>
        <source src="https://themarketsniper.com/wp-content/uploads/2022/12/Websitevid9-576.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}