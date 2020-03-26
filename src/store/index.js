import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
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
        memo: [
          {
            date: '2019/07/01 13:45',
            content: '備忘訊息1',
          },
          {
            date: '2019/07/01 14:45',
            content: '備忘訊息1',
          },
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
        memo: [
          {
            date: '2019/07/01 13:45',
            content: '備忘訊息1',
          },
          {
            date: '2019/07/01 14:45',
            content: '備忘訊息1',
          },
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
        memo: [
          {
            date: '2019/07/01 13:45',
            content: '備忘訊息1',
          },
          {
            date: '2019/07/01 14:45',
            content: '備忘訊息1',
          },
        ],
      },
    ],
  },
  mutations: {
    resetCounter(state) {
      state.count = 0;
    },
    addNewMemo(state, payload) {
      const key = 'index';
      const memo = 'memo';
      const index = parseInt(payload[key], 10);
      state.firendsList.forEach((firend) => {
        if (firend[key] === index) {
          firend[memo].push(payload[memo]);
        }
      });
    },
    deleteMemo(state, payload) {
      const key = 'index';
      const memo = 'memo';
      const index = parseInt(payload[key], 10);
      state.firendsList.forEach((firend) => {
        if (firend[key] === index) {
          const deleteIndex = firend[memo].indexOf(payload[memo]);
          firend[memo].splice(deleteIndex, 1);
        }
      });
    },
  },
  actions: {
    resetCounter(context) {
      context.commit('resetCounter');
    },
    addNewMemo(context, payload) {
      context.commit('addNewMemo', payload);
    },
    deleteMemo(context, payload) {
      context.commit('deleteMemo', payload);
    },
  },
  getters: {
    filterFirends: (state) => (index) => state.firendsList.filter(
      (item) => item.index === parseInt(index, 10),
    ),
    // 篩選關鍵字
    filterString: (state, getters) => (keyword, index) => state.firendsList.filter(
      (item) => item.index === parseInt(index, 10),
    ).map((item) => item.dialogue.map((dia) => {
      if (keyword === '') return dia;
      const regex = new RegExp(keyword, 'i');
      const match = dia.match(regex);
      if (match) {
        getters.counterResult(match);
        return dia.replace(regex, `<span class='chat__dialogue--highlight'>${match[0]}</span>`);
      }
      return dia;
    })),
    // 相符數量
    counterResult: (state) => (match) => {
      if (match) state.count += 1;
      return state.count;
    },
  },
  modules: {
  },
});
