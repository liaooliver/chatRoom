import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firendsList: [
      {
        index: 1,
        name: '保羅',
        log: '大家好，我是保羅～',
        imgUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Happy&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Brown',
        dialogue: [
          '保羅',
          '你好, 我是傑西卡',
          '我喜歡吃的食物有',
          '各種巧克力口味的甜點',
        ],
      },
      {
        index: 2,
        name: '傑克',
        log: '大家好，我是傑克～',
        imgUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=Vomit&skinColor=Light',
        dialogue: [
          '傑克',
          '你好, 我是傑西卡',
          '我喜歡做的運動為',
          '游泳,跑步',
        ],
      },
      {
        index: 3,
        name: '傑森',
        log: '大家好，我是傑森～',
        imgUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Heather&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Pale',
        dialogue: [
          '傑森',
          '你好, 我是傑西卡',
          '我喜歡的動物為',
          '貓,狗',
        ],
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    filterFirends: (state) => (index) => state.firendsList.filter(
      (item) => item.index === parseInt(index, 10),
    ),
  },
  modules: {
  },
});
