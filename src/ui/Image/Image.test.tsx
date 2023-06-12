import svgImage from "@images/next.svg";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Image from "./Image";

describe("Image", () => {
  it("valid Image src", () => {
    render(
      <Image
        alt="example-image"
        onAll={{
          src: "",
        }}
      />,
    );

    const image = screen.queryByRole("img", {
      name: "example-image",
    });

    expect(image).not.toBeInTheDocument();
  });

  it("show Image", () => {
    render(
      <Image
        alt="example-image"
        onAll={{
          src: svgImage,
        }}
      />,
    );

    const image = screen.getByRole("img", {
      name: "example-image",
    });

    userEvent.click(image);

    expect(image).toBeInTheDocument();
  });
});
