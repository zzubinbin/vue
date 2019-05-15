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
    <transition name="fade">
      <div v-show="detailShow" class="detail" transition="fade">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <div class="detail-title">
              {{ seller.name }}
            </div>
            <div class="detail-star">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="detail-offer">
              <div class="normal-title">
                <span class="normal-title-line"></span>
                <span class="normal-title-text">优惠信息</span>
                <span class="normal-title-line"></span>
              </div>
              <ul v-if="seller.supports" class="offer-supports">
                <li class="supports-list" v-for="(item, index) in seller.supports" :key="index">
                  <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                  <span class="text">{{ seller.supports[index].description }}</span>
                </li>
              </ul>
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
    </transition>
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
      margin: 0 4px 0 12px;
    }
    .right {
      margin: 0 12px 0 4px;
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
    overflow: auto;
    z-index: 100;
    height: 100%;
    width: 100%;
    background: rgba(7,17,27,0.8);
    .detail-wrapper {
      min-height: 100%;
      overflow: auto;
      .detail-main{
        margin-top: 64px;
        padding-bottom: 64px;
        .detail-title {
          display: block;
          overflow: hidden;
          line-height: 16px;
          font-weight: 700;
          margin-top: 64px;
          text-align: center;
        }
        .normal-title {
          display: flex;
          overflow: hidden;
          width: 100%;
          text-align: center;
          font-size: 14px;
          margin: 28px auto 24px auto;
          .normal-title-line {
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid #ccc ;
          }
          .normal-title-text {
            flex: 1;
            font-weight: 700;
            padding: 0 12px;
          }
        }
        .detail-star {
          display: block;
          overflow: hidden;
          text-align: center;
          padding: 2px 0;
          margin-top: 16px;
        }
        .detail-offer {
          display: block;
          overflow: hidden;
          width: 80%;
          margin: 0 auto;
          .offer-supports {
            display: block;
            overflow: hidden;
            .supports-list {
              height: 16px;
              line-height: 16px;
              margin-top: 12px;
              &:first-child {
                margin-top: 0px;
              }
              .icon{
                width: 16px;
                height: 16px;
                vertical-align: top;
                display: inline-block;
                background-repeat: no-repeat;
                background-size: 16px 16px;
              }
              .text {
                font-size: 12px;
                font-weight: 200;
                line-height: 12px;
              }
            }
          }
        }
        .detail-announcement {
          display: block;
          overflow: hidden;
          width: 80%;
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
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s;
}
.decrease {
  background-image: url("../../assets/img/decrease_2@2x.png");
}
.discount {
  background-image: url("../../assets/img/discount_2@2x.png");
}
.special {
  background-image: url("../../assets/img/special_2@2x.png");
}
.invoice {
  background-image: url("../../assets/img/invoice_2@2x.png");
}
.guarantee {
  background-image: url("../../assets/img/guarantee_2@2x.png");
}
.clearfix {
  display: inline-block;
}
.clearfix:after {
  display: block;
  content: ".";
  height: 0;
  line-height: 0;
  clear: both;
  visibility: hidden;
}
</style>
