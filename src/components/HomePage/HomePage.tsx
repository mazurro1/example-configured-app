import { usePageColorMode } from "@hooks/usePageColorMode";
import { useTranslation } from "@hooks/useTranslations";
import svgImage from "@images/next.svg";
import { useState } from "react";

import { useAlerts } from "@/hooks/useAlerts";
import { useLoader } from "@/hooks/useLoader";
import Animation from "@/ui/Animation";
import AnimationContainer from "@/ui/AnimationContainer";
import Image from "@/ui/Image";
import Spacing from "@/ui/Spacing";

const HomePage = () => {
  const [enableAnimation, setEnableAnimation] = useState(false);

  const { handleChangePageColorMode, darkMode } = usePageColorMode();
  const { handleAddAlert } = useAlerts();

  const { tString } = useTranslation("common");
  const { handleChangeLoading } = useLoader();

  const handleLoader = () => {
    handleChangeLoading(true);
    setTimeout(() => {
      handleChangeLoading(false);
    }, 2000);
  };

  const handleChangeAnimation = () => {
    setEnableAnimation(prevState => !prevState);
  };

  return (
    <section>
      <div>{tString("example")}</div>
      <button onClick={handleChangePageColorMode}>
        is dark mode: {darkMode.toString()}
      </button>
      <button onClick={handleLoader}>loader</button>
      <button onClick={handleChangeAnimation}>animation</button>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingTop: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <Spacing
        onAll={{
          paddingBottom: 10,
        }}
      >
        spacing
      </Spacing>
      <AnimationContainer enabled={enableAnimation}>
        <Animation id="123" animation="fadeRight" animationValue={1000}>
          <button
            onClick={() => {
              handleAddAlert({
                variant: "info",
                message: "xxxxxxxxx",
              });
            }}
          >
            add alert
          </button>
        </Animation>
      </AnimationContainer>
      <Animation
        id="1233"
        animation="fadeScale"
        animationValue={1000}
        showOnScroll
        transition="medium"
        delay={10}
      >
        <Image
          alt="img"
          onAll={{
            src: svgImage,
          }}
        />
      </Animation>
    </section>
  );
};

export default HomePage;
