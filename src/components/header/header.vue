<template>
  <div class="header">
    <div class="content">
      <div class="content-avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content-text">
        <div class="text-title">
          <div class="title-img"><img src="../../assets/img/brand@2x.png"></div>
          <span>{{ seller.name }}</span>
        </div>
        <div class="text-time">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
        <div v-if="seller.supports" class="text-cut">
          <div class="text-cut-left">
            <img src="../../assets/img/decrease_1@2x.png">
            <span>{{ seller.supports[0].description }}</span>
          </div>
          <div class="text-cut-right" @click="showDetial">
            <span class="cut-more">{{ seller.supports.length }}个<img width="15" height="15" src="../../assets/img/right.png" class="right"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="tips" @click="showDetial">
      <img width="22" height="12" src="../../assets/img/bulletin@2x.png" class="tips-brand">
      <span>{{ seller.bulletin }}</span>
      <img width="15" height="15" src="../../assets/img/right.png" class="right">
    </div>
    <div class="header-background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="detail" >
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <div class="detail-title">
            {{ seller.name }}
          </div>
          <div class="detail-star">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="detail-offer">
            <div class="normal-title mb-12">
              <span class="normal-title-line"></span>
              <span class="normal-title-text">优惠信息</span>
              <span class="normal-title-line"></span>
            </div>
            <div class="offer-list">
              <img src="../../assets/img/decrease_2@2x.png" width="16" height="16">
              <span>{{ seller.supports[0].description }}</span>
            </div>
          </div>
          <div class="detail-announcement">
            <div class="normal-title">
              <span class="normal-title-line"></span>
              <span class="normal-title-text">商家公告</span>
              <span class="normal-title-line"></span>
            </div>
            <p>{{ seller.bulletin }}</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <img src="../../assets/img/close.png" width="32" height="32"  @click="closeDetail">
      </div>
    </div>
  </div>
</template>

<script>
import star from 'components/star/star'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetial: function () {
      this.detailShow = true
    },
    closeDetail: function () {
      this.detailShow = false
    }
  },
  components: {
    star
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>

<style scoped lang="scss">
@import "../../common/css/_base.scss";
.mb-12 {
  margin-bottom: 12px;
}
.header {
  position: relative;
  overflow: hidden;
  width: 100%;
  color: #fff;
  background: rgba(7,17,27,0.5);
  .header-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  .content {
    display: flex;
    width: 100%;
    blur: 5px;
    .content-avatar {
      display: inline-block;
      padding: 24px 16px 18px 24px;
    }
    .content-text {
      display: inline-block;
      padding-top: 24px;
      width: 70%;
      .text-title {
        height: 20px;
        padding-top: 2px;
        padding-bottom: 8px;
        line-height: 20px;
        font-size: 16px;
        img {
          vertical-align: middle;
        }
        span {
          font-weight: bold;
        }
        .title-img {
          display: inline-block;
          img {
            width: 30px;
            height: 18px;
          }
        }
      }
      .text-time {
        font-size: 12px;
        font-weight: 200;
      }
      .text-cut-left {
        display: inline-block;
        margin-top: 10px;
      }
      .text-cut {
        height: 12px;
        line-height: 12px;
        img {
          width: 12px;
          height: 12px;
          vertical-align: middle;
        }
        span {
          padding-top: 10px;
          padding-left: 4px;
          font-size: 10px;
          font-weight: 200;
        }
      }
      .text-cut-right {
        display: inline;
        float: right;
        background-color: rgba(0,0,0,0.2);
        padding: 7px 8px;
        border-radius: 14px;
        .cut-more {
          text-align: center;
          font-size: 10px;
          span {
            padding-right: 2px;
          }
          img {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
  .tips {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 28px;
    font-size: 10px;
    font-weight: 200;
    line-height: 28px;
    background-color: rgba(7,17,27,0.1);
    .tips-brand {
      margin: 0px 4px 0px 12px;
    }
    .right {
      margin: 0px 12px 0px 4px;
    }
    span {
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      -o-text-overflow:ellipsis;
    }
  }
  .detail {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 100;
    height: 100%;
    width: 100%;
    overflow: auto;
    font-size: 16px;
    font-weight: 700;
    background: rgba(7,17,27,0.8);
    .detail-wrapper {
      min-height: 100%;
      overflow: hidden;
      .detail-main{
        margin-top: 64px;
        padding-bottom: 64px;
        .detail-title {
          display: block;
          overflow: hidden;
          line-height: 16px;
          margin-top: 64px;
          text-align: center;
        }
        .normal-title {
          display: block;
          overflow: hidden;
          width: 100%;
          text-align: center;
          .normal-title-line {
            display: inline-block;
            overflow: hidden;
            width: 33%;
            border-top: 1px solid #ccc ;
          }
          .normal-title-text {
            vertical-align: -6px;
            padding: 0 2%;
            width: 20%;
          }
        }
        .detail-star {
          display: block;
          overflow: hidden;
          text-align: center;
          padding: 2px 0;
          margin-top: 16px;
          margin-bottom: 28px;
        }
        .detail-offer {
          display: block;
          overflow: hidden;
          width: 80%;
          margin: 0 auto;
          .offer-list {
            display: block;
            margin-bottom: 12px;
          }
          .offer-list:first-child {
            margin-top: 24px;
          }
        }
        .detail-announcement {
          display: block;
          overflow: hidden;
          width: 80%;
          text-align: center;
          margin: 0 auto;
          p {
            font-size: 12px;
            font-weight: 200;
            line-height: 24px;
          }
        }
      }
    }
    .detail-close {
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      clear: both;
    }
  }
}

</style>
