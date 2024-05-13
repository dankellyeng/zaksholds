import SayingBody from "./components/sayingBody/SayingBody";
import "@radix-ui/themes/styles.css";
import fetchEntries from "./utils/api/bookInfo";
import page from "./page.module.scss";
import Image from "next/image";

export default async function Home() {
  const data = await fetchEntries();

  if (!data) {
    return;
  }
  let fields: any = []; // any is used here since the contentful type returned is overly complicated.

  data.items.forEach((item: { fields: SayingType }) => {
    fields.push(item.fields);
  });

  return (
    <div className={page.fullPage}>
      <div className={page.page}>
        <SayingBody data={fields} />
        {/* <div className={page.bubbleContainer}> */}
        <div className={page.speechBubble}>
          <p className={page.speech}>
            With prices like these you won't be short changed (just short roped)
          </p>
        </div>
        {/* </div> */}
        <div className={page.zakImage}>
          <Image src="/images/zak.webp" alt="Zak" fill={true} />
        </div>
      </div>
    </div>
  );
}
