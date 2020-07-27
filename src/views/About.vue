<template>
  <div class="about">
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-6">
          <h2>Choose Your flights <span>from Moscow to Antalya</span></h2>
          <div class="s-flight-time">
            <span><img src="../assets/land.png" alt=""> 18.01.2019  Mosque to Antalya</span>
            <span><img src="../assets/to.png" alt=""> 26.01.2019  Mosque to Antalya</span>
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
            <span>minimize</span>
          </div>
        </div>
        <div class="flight-data">

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
                    label: 'Price(Descending) '
                }, {
                    value: 'ascending',
                    label: 'Price(Ascending) '
                },],
                value: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
  .about {
    background: #f3f9f9;
    min-height: 80vh;
    padding: 2%;
  }

  h1 {
    background: coral;
    color: #ffffff;
  }

  .flight-main{
    display: flex;
    justify-content: space-between;
  }
  .flight-sidebar{
    padding: 10px;
    max-width: 300px;
    width:30%;
    flex-shrink: 0;
    background: #ffffff;
  }
  .flight-data{
    flex-grow: 1;
  }

  .sidebar-header{
    display: flex;
    justify-content: space-between;
  }
</style>

