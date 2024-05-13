import footer from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={footer.footer}>
      <p className={footer.text}>© 2024 Zak Enterprises</p>
      <p className={footer.text}>All Rights Reserved.</p>
    </div>
  );
}
