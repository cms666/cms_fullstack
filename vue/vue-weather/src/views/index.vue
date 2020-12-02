<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city">切换城市</div>
    </div>
    <div class="city-info">
      <p class="city">{{ city }}</p>
      <p class="weather">{{ mapData.weather }}</p>
      <h2 class="temp">
        <em>{{ mapData.temperature }}</em
        >℃
      </h2>
      <div class="detail">
        <span>风力:{{ mapData.windPower }}</span> |
        <span>风向:{{ mapData.windDirection }}</span> |
        <span>空气湿度:{{ mapData.humidity }}%</span>
      </div>
    </div>
    <div class="future" v-if="futureMapData.length > 0">
      <div class="group">
        明天:
        <span class="tm"
          >白天:{{ futureMapData[0].dayTemp }}{{ futureMapData[0].dayWeather
          }}{{ futureMapData[0].dayWindDir
          }}{{ futureMapData[0].dayWindPower }}</span
        >
        <span class="tm"
          >夜间:{{ futureMapData[0].nightTemp
          }}{{ futureMapData[0].nightWeather }}{{ futureMapData[0].nightWindDir
          }}{{ futureMapData[0].nightWindPower }}</span
        >
      </div>
      <div class="group">
        后天:
        <span class="tm"
          >白天:{{ futureMapData[1].dayTemp }}{{ futureMapData[1].dayWeather
          }}{{ futureMapData[1].dayWindDir
          }}{{ futureMapData[1].dayWindPower }}</span
        >
        <span class="tm"
          >夜间:{{ futureMapData[1].nightTemp
          }}{{ futureMapData[1].nightWeather }}{{ futureMapData[1].nightWindDir
          }}{{ futureMapData[1].nightWindPower }}</span
        >
      </div>
    </div>
    <!-- <div class="mapid" ref="mapid"></div> -->
    <div class="echart" ref="echart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localTime: "",
      city: "",
      mapData: {},
      futureMapData: [],
      sericeData: [],
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
    this.initMap().then((e) => {
      console.log(e);
      this.getCurrentCityData();
    });
  },
  mounted() {
    // this.initMap()
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      //获取当前城市
      let that = this;
      // var map = new AMap.Map(that.$refs.mapid, {
      //   resizeEnable: true,
      // });
      return new Promise((resolve, reject) => {
        AMap.plugin("AMap.CitySearch", function () {
          var citySearch = new AMap.CitySearch();
          citySearch.getLocalCity(function (status, result) {
            if (status === "complete" && result.info === "OK") {
              // 查询成功，result即为当前所在城市信息
              that.city = result.city;
              resolve(that.city);
              // that.getCurrentCityData(result.city)
            }
          });
        });
      });
    },
    getCurrentCityData() {
      //查询天气
      let that = this;
      // console.log(that.city + "dd");
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();
        //执行实时天气信息查询
        weather.getLive(that.city, function (err, data) {
          console.log(err, data);
          that.mapData = data;
        });
      });
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getForecast(that.city, function (err, data) {
          console.log(err, data);
          that.futureMapData = data.forecasts;
          that.futureMapData.map((item) => {
            that.sericeData.push(item.dayTemp);
          });
          that.initEcharts();
        });
      });
    },
    initEcharts() {
      let dom = this.$refs.echart;
      var myChart = echarts.init(dom);
      let app = {},
        option = null;
      option = {
        xAxis: {
          type: "category",
          data: ["今天", "明天", "后天", "三天后"],
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          show: false,
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal += params[i].value + "°C";
            }
            return relVal;
          },
        },

        series: [
          {
            data: this.sericeData,
            type: "line",
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less">
// .mapid{
//   height: 300px;
//   width: 300px;
// }
.container {
  min-height: 100vh;
  background-color: #000;
  color: white;
  opacity: 0.7;
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info {
    text-align: center;
    .temp {
      font-size: 26px;
      em {
        font-size: 34px;
        font-style: normal;
      }
    }
  }
  .future {
    margin-top: 30px;
    padding: 0 10px;
    .group {
      height: 44px;
      line-height: 44px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.3);
      color: rgba(16, 16, 16, 1);
      margin-bottom: 10px;
      font-size: 16px;
      padding: 0 10px;
    }
    .tm {
      color: #fff;
    }
  }
  .echart {
    width: 100%;
    height: 50vh;
  }
}
</style>