<template>
  <div class="about">
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-6 status-header">
          <h3>Choose Your flights <span>from Moscow to Antalya</span></h3>
          <div class="s-flight-time">
            <span class="mr-2"><img src="../assets/land.png"
                                    alt=""> <strong>18.01.2019</strong>  Mosque to Antalya</span>
            <span class="ml-2"><img src="../assets/to.png" alt=""> <strong>26.01.2019</strong>  Antalya to Mosque</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="float-right d-flex">
            <span>Sort by
                  <el-select v-model="value" placeholder="Select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
            </span>

          </div>
        </div>
      </div>
    </div>


    <!--=============================
               Flight Dashboard
        =============================-->

    <div class="container">
      <div class="flight-main">
        <div class="flight-sidebar">
          <div class="sidebar-header">
            <span>Filter</span>
            <span>minimize <img src="../assets/nav.svg" alt=""></span>
          </div>

          <div class="sidebar-body mb-3">
            <span>Class</span>
            <span><i class="el-icon-arrow-up"></i></span>
          </div>

          <div class="flight-class">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="Economy"></el-checkbox>
              <br/>
              <el-checkbox label="Premium"></el-checkbox>
              <br/>
              <el-checkbox label="Premium Economy"></el-checkbox>
              <br/>
              <el-checkbox label="First Class"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>


        <!--=============================
                    Flight Data
            =============================-->
        <div class="flight-data">
          <div class="single-flight-area">

            <div class="single-flight-data">
              <div class="single-flight-status">

                <div class="sf-take-off-time">
                  <span><img src="../assets/to.png" alt=""></span>
                  <span>18.01.2019</span>
                </div>


                <div class="airlines-name">
                  <div class="airlines-logo">
                    <img src="../assets/ta.png" alt="">
                  </div>
                  <div class="flight-info">
                    <div class="airlines-name">
                      Turkish Airlines
                    </div>
                    <div class="available-seat">
                      <span>Economy  - </span>
                      <span>Last 2 seat </span>
                    </div>
                  </div>
                </div>


                <div class="flight-query-info">

                  <div class="takeoff-point">
                <span class="flight-start-time">
                  06:30
                </span>
                    <span class="flight-city">
                  MOS
                </span>
                  </div>

                  <div class="approx-time-distance">
                <span class="flight-app-time">
                  3h 15m
                </span>
                    <div class="flight-type">
                      Direct Flight
                    </div>
                  </div>


                  <div class="landing-point">
                <span class="flight-end-time">
                  19:15
                </span>
                    <span class="destination-city">
                  AYT
                </span>
                  </div>


                </div>


              </div>
              <div class="single-flight-status">

                <div class="sf-take-off-time">
                  <span><img src="../assets/land.png" alt=""></span>
                  <span>18.01.2019</span>
                </div>


                <div class="airlines-name">
                  <div class="airlines-logo">
                    <img src="../assets/ta.png" alt="">
                  </div>
                  <div class="flight-info">
                    <div class="airlines-name">
                      Turkish Airlines
                    </div>
                    <div class="available-seat">
                      <span>Economy  - </span>
                      <span>Last 2 seat </span>
                    </div>
                  </div>
                </div>


                <div class="flight-query-info">

                  <div class="takeoff-point">
                <span class="flight-start-time">
                  06:30
                </span>
                    <span class="flight-city">
                  MOS
                </span>
                  </div>

                  <div class="approx-time-distance">
                <span class="flight-app-time">
                  3h 15m
                </span>
                    <div class="flight-type">
                      Direct Flight
                    </div>
                  </div>


                  <div class="landing-point">
                <span class="flight-end-time">
                  19:15
                </span>
                    <span class="destination-city">
                  AYT
                </span>
                  </div>


                </div>


              </div>
            </div>

            <div class="flight-amount">
              <h3>3201.00 $</h3>
              <small>HOTEL + Flight price</small>
              <button class="btn btn-primary btn-block">select</button>
              <button class="btn btn-outline-secondary btn-sm btn-block">show details</button>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'About',
        components: {}
    })

    export default class About extends Vue {
        data() {
            return {
                options: [{
                    value: 'descending',
                    label: 'Price (Descending) '
                }, {
                    value: 'ascending',
                    label: 'Price (Ascending) '
                },],
                value: '',
                checkList: ['Option A']
            }

        }

    }
</script>

<style lang="scss" scoped>
  .about {
    background: #f3f9f9;
    min-height: 80vh;
    padding: 3% 2%;
  }


  .status-header {
    h3 {
      text-transform: capitalize;

      > span {
        display: inline-block;
        color: #2c3e50;
        font-size: 1.2rem;
      }
    }
  }

  .s-flight-time {
    span {
      color: #2c3e50;
      font-size: 0.9rem;
    }
  }


  .flight-main {
    display: flex;
    justify-content: space-between;
    min-height: 500px;
  }

  .flight-sidebar {
    padding: 15px;
    max-width: 280px;
    width: 30%;
    flex-shrink: 0;
    background: #ffffff;
    margin-right: 30px;
  }

  .flight-data {
    flex-grow: 1;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
  }

  .sidebar-body {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }


  .single-flight-area {
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    padding: 15px;
    margin-bottom: 30px;
  }

  .flight-amount {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      margin: 0;
      padding: 0;
    }

    small {
      margin-bottom: 10px;
    }
  }


  .sf-take-off-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .single-flight-status {
    display: flex;
    align-items: center;
    min-height: 80px;
    justify-content: space-between;
  }

  .airlines-name {
    display: flex;
    justify-content: center;
    align-items: center;

    .airlines-logo {
      img {
        width: 50px;
        height: auto;
        object-fit: cover;
      }
    }
  }

  .flight-query-info {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }

  .takeoff-point, .landing-point, .approx-time-distance {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .approx-time-distance {
    align-items: center;
  }

  .takeoff-point {
    align-items: flex-start;
  }

  .landing-point {
    align-items: flex-end;
  }
</style>

