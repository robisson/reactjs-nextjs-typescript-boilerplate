import React from "react";
import { withRedux } from "../withRedux";
import { mount } from "enzyme";
import { useSelector } from "react-redux";

describe("<withRedux /> tests", () => {
  it("Mount component wirh Redux Store", async () => {
    expect.hasAssertions();

    const Test = () => {
      const state: any = useSelector((state) => state);

      expect(state).not.toBe(null);

      return <div>Test</div>;
    };

    const ComponentWithRedux = withRedux(Test, { ssr: true });

    const component = mount(<ComponentWithRedux />);

    expect(component.text()).toBe("Test");
    expect(component).toMatchSnapshot();
  });
});
