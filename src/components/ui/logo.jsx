import "./logo.module.css";
const Logo = function ({ size = "md", position = "center" }) {
  const imgPosition =
    position === "left" ? "left" : position === "center" ? "center" : "right";
  const imgWidth = size === "sm" ? "75px" : size === "md" ? "125px" : "175px";

  return (
    <figure
      style={{
        textAlign: imgPosition,
      }}
    >
      <img
        src="./assets/images/logo.png"
        alt="todo logo"
        style={{
          width: imgWidth,
        }}
      />
    </figure>
  );
};
export default Logo;
