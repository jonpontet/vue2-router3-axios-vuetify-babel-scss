import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  const data = JSON.parse(
    '{"amIaFruit": {"isFruit": true,"name": "tomato","image": "https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/tomato.jpg","price": "408.00","color": "#013578","description": "The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.","taste": "Generic","expires": "2021-12-28T00:07:31.635Z","id": 4}}'
  );
  const wrapper = shallowMount(Home, {
    propsData: { data },
  });
  it("has image with alt attribute", () => {
    expect(wrapper.find("v-img").attributes("alt")).toBe("tomato");
  });
  it("has 2 links to view page", () => {
    const anchors = wrapper.findAll("a");
    expect(anchors).toHaveLength(2);
    expect(anchors.at(0).attributes("href")).toBe("/view/4");
    expect(anchors.at(1).attributes("href")).toBe("/view/4");
  });
  it("has title with H2 and link to view page", () => {
    const titles = wrapper.findAll("v-card-title");
    const h2s = wrapper.findAll("v-card-title>h2");
    const anchors = wrapper.findAll("v-card-title>h2>a");
    expect(titles).toHaveLength(1);
    expect(h2s).toHaveLength(1);
    expect(anchors).toHaveLength(1);
    expect(anchors.at(0).attributes("href")).toBe("/view/4");
    expect(h2s.at(0).text()).toBe("tomato");
  });
  it("has subtitle with price", () => {
    const subtitles = wrapper.findAll("v-card-subtitle");
    expect(subtitles).toHaveLength(1);
    expect(subtitles.at(0).text()).toBe("$408.00");
  });
});
