"use client";
import React, { FC, useState } from "react";
import sayingGenerator from "./sayingGenerator.module.scss";
import { Button, Text } from "@radix-ui/themes";
import Image from "next/image";

interface Props {
  data: any[];
}

type ChatResponse = {
  saying?: string;
  error?: string;
};

const fetchSaying = async (userMessage: string): Promise<ChatResponse> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-1106",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userMessage },
        ],
      }),
    });

    const data = await response.json();

    return { saying: data.choices[0]?.message?.content };
  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error" };
  }
};

const SayingGenerator: FC<Props> = ({ ...props }) => {
  const [generatedSaying, setGeneratedSaying] = useState("");
  if (!props) {
    return;
  }

  // function generateSaying() {
  //   setGeneratedSaying(
  //     sayings[Math.floor(Math.random() * sayings.length)].saying
  //   );
  // }

  const handleButtonClick = async () => {
    try {
      const { saying, error } = await fetchSaying(
        "Return a popular saying and say nothing else"
      );

      if (error) {
        console.error(error);
        return;
      }

      setGeneratedSaying(saying || "");
    } catch (error) {
      console.error(error);
    }
  };

  const sayings = props.data;

  return (
    <div className={sayingGenerator.allCards}>
      {generatedSaying !== "" ? (
        <div className={sayingGenerator.speechBubble}>
          <p className={sayingGenerator.saying}>{generatedSaying}</p>
        </div>
      ) : (
        <div className={sayingGenerator.placeholder} />
      )}
      <div className={sayingGenerator.imageContainer}>
        <Image
          className={sayingGenerator.image1}
          fill={true}
          src="/images/circle.svg"
          alt="Circle"
        />
        <Image
          className={sayingGenerator.image2}
          fill={true}
          src="/images/saus.webp"
          alt="Sausage"
        />
      </div>
      <div className={sayingGenerator.buttonContainer}>
        <Button color="gray" variant="outline" onClick={handleButtonClick}>
          <Text className={sayingGenerator.buttonText}> Generate Saying</Text>
        </Button>
      </div>
    </div>
  );
};

export default SayingGenerator;
