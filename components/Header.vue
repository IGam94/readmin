<template>
  <div id="gnb">
    <div class="gnb-top-con">
      <div class="gnb-inner-con clearfix">
        <h1></h1>
        <strong class="customer-num"><span class="fBlue"></span></strong>
        <div class="gnb-version">
          <div id="btn_top_ver" style="display: inline-block; visibility: hidden">
            <span>주문</span>
            <span>2.0</span>
            <span class="bar">|</span>디자인
            <span>D4</span>
            <span class="bar">|</span>모바일
            <span>이지팩</span>
            <span class="bar">|</span>통합옵션
            <span>사용</span>
          </div>
        </div>
        <div class="gnb-top-menu">
          <ul class="clearfix">
            <li>
              <a href="javascript:;" onclick="crmpopup()"
                ><strong>번호 : <em class="shom-num">445466</em></strong></a
              >
            </li>
            <li>
              <a href="https://www.makeshop.co.kr/newmakeshop/front/notice.pop.html" target="_blank"><strong class="fBlue">공지사항</strong></a>
            </li>
            <li>
              <a href="https://www.makeshop.co.kr/newmakeshop/front/upgrade.html" target="_blank"><strong class="fBlue">업그레이드</strong></a>
            </li>
            <li>
              <a
                href="javascript:;"
                onclick="javascript:window.open('/makeshop/newmanager/makeshop_ipaccess.pop.html', 'ipaccess', 'width=760, height=600, menubar=0, resizable=0, toolbar=0, status=0, scrollbars=yes, location=no, menubar=0');return false;"
                ><strong class="fRed">이벤트 모니터링 요청</strong></a
              >
            </li>
            <li>
              <a href="./logout.html">로그아웃</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- // .gnb-inner-con -->
    </div>
    <!-- // .gnb-top-con -->

    <div class="gnb-bot-con">
      <div class="gnb">
        <ul class="main-menu clearfix">
          <li class="shop">
            <a target="main" class="" href="makeshop_shopmember.html" onclick="javascript:set_cti_layer_location('shop')"
              ><span class="txt">쇼핑몰구축</span></a
            >
          </li>
          <li class="product">
            <a target="main" class="" href="product_list.html" onclick="javascript:set_cti_layer_location('product')"
              ><span class="txt">상품관리</span></a
            >
          </li>
          <li class="order">
            <a target="main" class="" href="../oomanager/oo_search_form.html?listType=nomalList" onclick="javascript:set_cti_layer_location('order')"
              ><span class="txt">주문관리</span></a
            >
          </li>
          <li class="member">
            <a target="main" class="now" href="member_user.html" onclick="javascript:set_cti_layer_location('member')"
              ><span class="txt">회원관리</span></a
            >
          </li>
          <li class="board">
            <a target="main" class="" href="board_all_list.html" onclick="javascript:set_cti_layer_location('board')"
              ><span class="txt">게시판/메일</span></a
            >
          </li>
          <li class="mobile">
            <a target="main" class="" href="handy_mobile_setting.html" onclick="javascript:set_cti_layer_location('mobile')"
              ><span class="txt">모바일샵</span></a
            >
          </li>
          <li class="mobileapp">
            <a target="main" class="" href="powerapp_about.html" onclick="javascript:set_cti_layer_location('mobileapp')"
              ><span class="txt">모바일앱</span
              ><img src="/makeshop/newmanager/neoimages/icon/slide_push_n.png" class="app-reject-badge" style="display: none"
            /></a>
          </li>
          <li class="s-promotion">
            <a target="main" class="" href="crm_banner.html?adminmenu=event" onclick="javascript:set_cti_layer_location('s-promotion')"
              ><span class="txt">프로모션</span></a
            >
          </li>
          <li class="individual">
            <a target="main" class="" href="neodesign_skin_manager.html" onclick="javascript:set_cti_layer_location('individual')"
              ><span class="txt">개별디자인</span></a
            >
          </li>
          <li class="search">
            <a target="main" class="" href="search_engine_setting.html" onclick="javascript:set_cti_layer_location('search')"
              ><span class="txt">검색엔진</span></a
            >
          </li>
          <li class="market">
            <a target="main" class="" href="associated_service.html" onclick="javascript:set_cti_layer_location('market')"
              ><span class="txt">연동관리</span></a
            >
          </li>
          <li class="global">
            <a target="main" class="" href="okdgg_about.html" onclick="javascript:set_cti_layer_location('global')"
              ><span class="txt">해외진출</span></a
            >
          </li>
          <li class="stats">
            <a target="main" class="" href="analyzer_info.html" onclick="javascript:set_cti_layer_location('stats')"
              ><span class="txt">접속통계</span></a
            >
          </li>
          <li class="marketing">
            <a
              target="_blank"
              class=""
              href="//market-center.makeshop.co.kr/?auth_host=premium264.makeshop.co.kr"
              onclick="javascript:set_cti_layer_location('marketing')"
              ><span class="txt">마케팅센터</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* GNB */
#gnb {
  width: 100%;
  font-size: 12px;
  border-bottom: 1px solid #0c2254;
  background: #fff;
}

#gnb .gnb-top-con .gnb-inner-con {
  position: relative;
  width: 100%;
  width: 100% !important;
  min-width: 1280px;
  height: 40px;
  line-height: 38px;
  font-family: "Malgun Gothic";
}

#gnb .gnb-top-con .gnb-inner-con h1 {
  display: inline-block;
  height: 40px;
  line-height: 38px;
  vertical-align: top;
}

#gnb .gnb-top-con .gnb-inner-con h1 a {
  display: block;
  padding: 0 20px 0 15px;
}

#gnb .gnb-top-con .gnb-inner-con h1 img {
  vertical-align: middle;
}

#gnb .gnb-top-con .gnb-inner-con .customer-num {
  display: inline-block;
  height: 40px;
  line-height: 38px;
  vertical-align: top;
}

#gnb .gnb-top-con .gnb-inner-con .customer-num a {
  background: none;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-version {
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 11px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-version > img {
  cursor: pointer;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-version #btn_top_ver {
  height: 100%;
  margin-left: 6px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-version #btn_top_ver .bar {
  display: inline-block;
  margin: -1px 7px 0 5px;
  color: #dddee2;
  vertical-align: top;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu {
  position: absolute;
  top: 0;
  right: 0;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul {
  height: 40px;
  line-height: 38px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li {
  position: relative;
  float: left;
  padding: 0 14px 0 5px;
  font-size: 12px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li a {
  display: inline-block;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .btn-vip {
  display: inline;
  padding: 5px 10px;
  color: #fff;
  background: #ff8e2a;
  vertical-align: middle;
  border-radius: 5px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .shom-num {
  display: inline-block;
  padding-top: 1px;
  font-style: normal;
  vertical-align: top;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li.line {
  background: url("/makeshop/newmanager/neoimages/new_category/bul_h11_line.jpg") no-repeat 0 45%;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li.search {
  padding-left: 5px;
  line-height: 38px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li span {
  line-height: 44px;
  text-align: center;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li span em {
  display: inline-block;
  width: 6px;
  height: 11px;
  margin-left: 5px;
  background: url("/makeshop/newmanager/neoimages/new_category/bul_h3_arr.jpg") no-repeat left 45%;
  vertical-align: middle;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li span:hover {
  cursor: default;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li:first-child span {
  color: #2a62dd;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu {
  display: none;
  z-index: 1;
  position: absolute;
  top: 33px;
  left: 15px;
  height: 88px;
  border: 1px solid #2a62dd;
  line-height: 14px;
  background: #fff;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li:hover .sub-menu {
  display: block;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu dl {
  float: left;
  width: 120px;
  height: 78px;
  padding-top: 10px;
  border-left: 1px solid #cbcbcb;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu dl.w130 {
  width: 130px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu dl.w140 {
  width: 140px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu dl:first-child {
  border-left: none;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu dl dd {
  text-align: left;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu dl dd a {
  display: block;
  padding: 3px 15px 1px;
  color: #000;
  background: none;
  font-size: 11px;
  letter-spacing: -0.5px;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu dl dd a:hover {
  color: #2a62dd;
  font-weight: bold;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .search-wrap {
  font-size: 0;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .search-wrap input {
  vertical-align: middle;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .search-wrap .txt-input {
  width: 110px;
  height: 21px;
  line-height: 23px;
  padding-left: 5px;
  font-size: 12px;
  background: #ececec;
  border: none;
}

#gnb .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .search-wrap .btn-go {
  width: 30px;
  height: 23px;
  border: none;
  background: url("/makeshop/newmanager/neoimages/new_category/btn_h23_search.jpg") no-repeat 0 0;
}

#gnb .gnb-bot-con .gnb {
  margin: 0;
  padding: 0;
}

#gnb .gnb-bot-con .gnb ul li {
  position: relative;
  float: left;
  width: auto;
}

#gnb .gnb-bot-con .gnb ul li a {
  display: block;
  width: 90px;
  height: 45px;
  line-height: 43px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  font-family: "Malgun Gothic";
  letter-spacing: -0.5px;
}

/* ±âº» */
#gnb .gnb-bot-con .gnb ul li a img.app-reject-badge {
  position: absolute;
  top: 12px;
  right: 0;
  width: 20px;
  height: 20px;
}

/* ¸ð¹ÙÀÏ¾Û ¹Ý·Á ¹îÁö */
#gnb.gnb-makefran .gnb-bot-con .gnb ul li a {
  width: 89px;
}

/* ¸ÞÀÌÅ©ÇÁ·£ */
#gnb .gnb-bot-con .gnb ul li .txt {
  display: block;
}

#gnb .gnb-bot-con .gnb .main-menu {
  overflow: hidden;
  height: 45px;
  background: #2a61dd;
}

#gnb .gnb-bot-con .gnb .main-menu a {
  background: #2a61dd;
}

#gnb .gnb-bot-con .gnb .main-menu a:hover {
  background: #487cf3;
}

#gnb .gnb-bot-con .gnb .main-menu a.now {
  background: #0d2a6b;
}

#gnb .gnb-bot-con .gnb .main-menu a.disabled:hover,
#gnb .gnb-bot-con .gnb .main-menu a.disabled {
  background: #2a61dd;
  color: #829be8;
}

#gnb.gnb-makefran .gnb-bot-con .gnb .main-menu {
  background: #4db25e;
}

/* ¸ÞÀÌÅ©ÇÁ·£ */
#gnb.gnb-makefran .gnb-bot-con .gnb .main-menu a {
  background: #4db25e;
}

/* ¸ÞÀÌÅ©ÇÁ·£ */
#gnb.gnb-makefran .gnb-bot-con .gnb .main-menu a:hover {
  background: #69c479;
}

#gnb.gnb-makefran .gnb-bot-con .gnb .main-menu a.now {
  background: #11511c;
}

#gnb.gnb-makefran .gnb-bot-con .gnb .main-menu a.disabled:hover,
#gnb.gnb-makefran .gnb-bot-con .gnb .main-menu a.disabled {
  background: #4db25e;
  color: #84c790;
}

#gnb.gnb-makefran .gnb-top-con .gnb-inner-con .gnb-top-menu ul li .sub-menu {
  left: -41px;
}

#gnb.gnb-makefran .gnb-top-con .gnb-inner-con .gnb-top-menu ul li:first-child .sub-menu {
  left: -81px;
}

/* etc */
.ir *,
.blind {
  z-index: -1;
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0;
  text-indent: -9999px;
}
</style>
