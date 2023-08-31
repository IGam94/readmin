<template>
  <div>
    <td width="190" height="100%" id="bodyleft" valign="top" style="width: 190px">
      <div id="banner" style="width: 188px; visibility: visible; display: block">
        <link rel="stylesheet" href="https://premium264.makeshop.co.kr/newmanager/css/new_left_menu.css?ver=20230830113516" />
        <div id="aside" style="height: 1393px; padding-bottom: 0px">
          <div class="aside-tit">
            <img src="https://premium264.makeshop.co.kr/newmanager/neoimages/common/common_left_ico_M0005.gif" alt="" />
            <h2>회원관리</h2>
            <a href="javascript:manual_info('M0005');" class="btn-help">HELP</a>
          </div>

          <div class="lnb">
            <!-- 주의 아래 hidden 삭제 하면 안됨 중메뉴 열리는것과 관계있음 ./js/new_left_menu.js에서 처리 -->
            <input type="hidden" name="TOP_MENU_CODE" id="TOP_MENU_CODE" value="M0005" />
            <input type="hidden" name="OPEN_LEFT_MENU_CODE" id="OPEN_LEFT_MENU_CODE" value="M00050008" />
            <input type="hidden" name="NOW_LEFT_MENU_CODE" id="NOW_LEFT_MENU_CODE" value="M000500080001" />
            <input
              type="hidden"
              name="NEW_CATEGORY_CNT_INFO"
              id="NEW_CATEGORY_CNT_INFO"
              value="M00050008||0004|{}|M00050010||0008|{}|M00050011||0019|{}|M00050041||0003|{}|M00050012||0002|{}|M00050013||0006|{}|M00050022||0003|{}|M00050014||0027|{}|M00050027||0005|{}|M00050023||0006|{}|M00050025||0003|{}|M00050015||0004|{}|M00050018||0001|{}|M00050024||0002"
            />
            <div class="lnb-menu now" id="M00050008" onclick="ASIDE_CLICK('M00050008');">
              <input type="hidden" id="M00050008_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050008_OPEN" value="show" />
              <h3><a href="#this" id="M00050008_H3">회원관리</a></h3>
              <div id="M00050008_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050008_SUB_MENU_LIST_UL">
                  <li class="now">
                    <a href="https://premium264.makeshop.co.kr/newmanager/member_user.html" onfocus="this.blur();" id="M000500080001"
                      ><em>·</em>회원/CRM 관리하기</a
                    ><span class="ico-menu-quick" id="ico-M000500080001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/member_dormant.html" onfocus="this.blur();" id="M000500080003"
                      ><em>·</em>휴면고객 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500080003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/member_lifetime.html" onfocus="this.blur();" id="M000500080004"
                      ><em>·</em>개인정보 유효기간 혜택 설정</a
                    ><span class="ico-menu-quick" id="ico-M000500080004" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/member_excel.html" onfocus="this.blur();" id="M000500080002"
                      ><em>·</em>회원 엑셀파일 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500080002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050010" onclick="ASIDE_CLICK('M00050010');">
              <input type="hidden" id="M00050010_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050010_OPEN" value="hide" />
              <h3><a href="#this" id="M00050010_H3">회원등급별 쇼핑몰 설정</a></h3>
              <div id="M00050010_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050010_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_makegroup.html" onfocus="this.blur();" id="M000500100001"
                      ><em>·</em>회원그룹 신규 생성/삭제</a
                    ><span class="ico-menu-quick" id="ico-M000500100001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_groupoption.html" onfocus="this.blur();" id="M000500100002"
                      ><em>·</em>회원그룹 부가기능</a
                    ><span class="ico-menu-quick" id="ico-M000500100002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_ingroup.html" onfocus="this.blur();" id="M000500100003"
                      ><em>·</em>그룹별 회원등록 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500100003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_csvgroup.html" onfocus="this.blur();" id="M000500100004"
                      ><em>·</em>회원 CSV 일괄 그룹등록</a
                    ><span class="ico-menu-quick" id="ico-M000500100004" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_viewgroup.html" onfocus="this.blur();" id="M000500100005"
                      ><em>·</em>그룹별 전체회원 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500100005" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_autogroup.html" onfocus="this.blur();" id="M000500100006"
                      ><em>·</em>그룹별 자동 등록 설정</a
                    ><span class="ico-menu-quick" id="ico-M000500100006" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_autogroup_log.html" onfocus="this.blur();" id="M000500100007"
                      ><em>·</em>자동 등록 회원 확인</a
                    ><span class="ico-menu-quick" id="ico-M000500100007" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_change_group_log.html" onfocus="this.blur();" id="M000500100008"
                      ><em>·</em>회원그룹 변경 내역</a
                    ><span class="ico-menu-quick" id="ico-M000500100008" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050011" onclick="ASIDE_CLICK('M00050011');">
              <input type="hidden" id="M00050011_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050011_OPEN" value="hide" />
              <h3><a href="#this" id="M00050011_H3">회원관리 프로모션</a></h3>
              <div id="M00050011_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050011_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_emoney.html" onfocus="this.blur();" id="M000500110011"
                      ><em>·</em>예치금 내역조회</a
                    ><span class="ico-menu-quick" id="ico-M000500110011" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_reserve.html" onfocus="this.blur();" id="M000500110014"
                      ><em>·</em>적립금 내역 조회</a
                    ><span class="ico-menu-quick" id="ico-M000500110014" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_point.html" onfocus="this.blur();" id="M000500110017"
                      ><em>·</em>포인트 내역 조회</a
                    ><span class="ico-menu-quick" id="ico-M000500110017" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_userexit.html" onfocus="this.blur();" id="M000500110010"
                      ><em>·</em>쇼핑몰 회원탈퇴 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500110010" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_csv_reserve.html" onfocus="this.blur();" id="M000500110001"
                      ><em>·</em>적립금 CSV 일괄지급</a
                    ><span class="ico-menu-quick" id="ico-M000500110001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_csv_emoney.html" onfocus="this.blur();" id="M000500110012"
                      ><em>·</em>예치금 CSV 일괄지급</a
                    ><span class="ico-menu-quick" id="ico-M000500110012" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_csv_point.html" onfocus="this.blur();" id="M000500110002"
                      ><em>·</em>포인트 CSV 일괄지급</a
                    ><span class="ico-menu-quick" id="ico-M000500110002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_userreserve.html" onfocus="this.blur();" id="M000500110004"
                      ><em>·</em>적립금/쿠폰 수기 지급 조회</a
                    ><span class="ico-menu-quick" id="ico-M000500110004" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_confirm_reserve.html" onfocus="this.blur();" id="M000500110005"
                      ><em>·</em>적립금 지급요청 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500110005" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_confirm_emoney.html" onfocus="this.blur();" id="M000500110013"
                      ><em>·</em>예치금 지급요청 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500110013" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_confirm_member.html" onfocus="this.blur();" id="M000500110016"
                      ><em>·</em>회원 일괄 인증 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500110016" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_userbirth.html" onfocus="this.blur();" id="M000500110006"
                      ><em>·</em>생일/기념일 축하 이벤트</a
                    ><span class="ico-menu-quick" id="ico-M000500110006" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/user_modify_event.html" onfocus="this.blur();" id="M000500110007"
                      ><em>·</em>회원정보 수정 이벤트</a
                    ><span class="ico-menu-quick" id="ico-M000500110007" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a
                      href="https://premium264.makeshop.co.kr/newmanager/receive_rejection_excelprocess.html"
                      onfocus="this.blur();"
                      id="M000500110009"
                      ><em>·</em>메일/SMS 엑셀 수신거부</a
                    ><span class="ico-menu-quick" id="ico-M000500110009" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/user_type_modify.html" onfocus="this.blur();" id="M000500110019"
                      ><em>·</em>회원형태일괄수정</a
                    ><span class="ico-menu-quick" id="ico-M000500110019" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050041" onclick="ASIDE_CLICK('M00050041');">
              <input type="hidden" id="M00050041_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050041_OPEN" value="hide" />
              <h3><a href="#this" id="M00050041_H3">스마트 적립금</a></h3>
              <div id="M00050041_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050041_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/smart_reserve_setup.html" onfocus="this.blur();" id="M000500410001"
                      ><em>·</em>스마트 적립금 설정</a
                    ><span class="ico-menu-quick" id="ico-M000500410001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/smart_reserve_manager_list.html" onfocus="this.blur();" id="M000500410002"
                      ><em>·</em>적립금 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500410002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/smart_reserve_provide.html" onfocus="this.blur();" id="M000500410003"
                      ><em>·</em>적립금 지급설정</a
                    ><span class="ico-menu-quick" id="ico-M000500410003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050012" onclick="ASIDE_CLICK('M00050012');">
              <input type="hidden" id="M00050012_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050012_OPEN" value="hide" />
              <h3><a href="#this" id="M00050012_H3">회원 쪽지 보내기</a></h3>
              <div id="M00050012_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050012_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/member_usernote_about.html" onfocus="this.blur();" id="M000500120001"
                      ><em>·</em>회원 쪽지 보내기 소개</a
                    ><span class="ico-menu-quick" id="ico-M000500120001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/member_usernote.html" onfocus="this.blur();" id="M000500120002"
                      ><em>·</em>회원 쪽지내역 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500120002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050013" onclick="ASIDE_CLICK('M00050013');">
              <input type="hidden" id="M00050013_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050013_OPEN" value="hide" />
              <h3><a href="#this" id="M00050013_H3">출석체크 서비스</a></h3>
              <div id="M00050013_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050013_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_attendance_intro.html" onfocus="this.blur();" id="M000500130001"
                      ><em>·</em>출석체크 기능소개</a
                    ><span class="ico-menu-quick" id="ico-M000500130001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_attendance.html" onfocus="this.blur();" id="M000500130002"
                      ><em>·</em>출석체크 기능설정</a
                    ><span class="ico-menu-quick" id="ico-M000500130002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_attendance_design.html" onfocus="this.blur();" id="M000500130003"
                      ><em>·</em>출석체크 디자인 설정</a
                    ><span class="ico-menu-quick" id="ico-M000500130003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_attendance_list.html" onfocus="this.blur();" id="M000500130004"
                      ><em>·</em>출석체크 리스트 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500130004" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_attendance_reservation.html" onfocus="this.blur();" id="M000500130005"
                      ><em>·</em>출석체크 예약설정</a
                    ><span class="ico-menu-quick" id="ico-M000500130005" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a
                      href="https://premium264.makeshop.co.kr/newmanager/crm_attendance_reservation_list.html"
                      onfocus="this.blur();"
                      id="M000500130006"
                      ><em>·</em>출석체크 예약/마감 내역</a
                    ><span class="ico-menu-quick" id="ico-M000500130006" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050022" onclick="ASIDE_CLICK('M00050022');">
              <input type="hidden" id="M00050022_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050022_OPEN" value="hide" />
              <h3><a href="#this" id="M00050022_H3">카트타겟 메시지(CTM)</a></h3>
              <div id="M00050022_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050022_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_ctmintro.html" onfocus="this.blur();" id="M000500220001"
                      ><em>·</em>카트타겟 메시지(CTM) 소개</a
                    ><span class="ico-menu-quick" id="ico-M000500220001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_ctsend.html" onfocus="this.blur();" id="M000500220002"
                      ><em>·</em>카트타겟 메시지(CTM) 발송</a
                    ><span class="ico-menu-quick" id="ico-M000500220002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_ctlist.html" onfocus="this.blur();" id="M000500220003"
                      ><em>·</em>카트타겟 메시지(CTM) 내역</a
                    ><span class="ico-menu-quick" id="ico-M000500220003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050014" onclick="ASIDE_CLICK('M00050014');">
              <input type="hidden" id="M00050014_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050014_OPEN" value="hide" />
              <h3><a href="#this" id="M00050014_H3">문자(SMS) 발송/관리</a></h3>
              <div id="M00050014_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050014_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_smsintro.html" onfocus="this.blur();" id="M000500140017"
                      ><em>·</em>SMS 소개</a
                    ><span class="ico-menu-quick" id="ico-M000500140017" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_smsmoney.html" onfocus="this.blur();" id="M000500140002"
                      ><em>·</em>SMS 충전</a
                    ><span class="ico-menu-quick" id="ico-M000500140002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_smsconfig.html" onfocus="this.blur();" id="M000500140001"
                      ><em>·</em>SMS 서비스 설정</a
                    ><span class="ico-menu-quick" id="ico-M000500140001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_smssend.html" onfocus="this.blur();" id="M000500140005"
                      ><em>·</em>SMS 보내기</a
                    ><span class="ico-menu-quick" id="ico-M000500140005" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_smsmanage.html" onfocus="this.blur();" id="M000500140026"
                      ><em>·</em>SMS 발송 메시지 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500140026" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_smscount.html" onfocus="this.blur();" id="M000500140018"
                      ><em>·</em>SMS 발송내역 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500140018" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_smsdellist.html" onfocus="this.blur();" id="M000500140019"
                      ><em>·</em>SMS 예약내역 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500140019" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/order_sendsms.html" onfocus="this.blur();" id="M000500140020"
                      ><em>·</em>주문회원 일괄SMS 발송</a
                    ><span class="ico-menu-quick" id="ico-M000500140020" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/order_adminsms.html" onfocus="this.blur();" id="M000500140021"
                      ><em>·</em>매출통계 SMS 발송</a
                    ><span class="ico-menu-quick" id="ico-M000500140021" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_smsaddress.html" onfocus="this.blur();" id="M000500140022"
                      ><em>·</em>SMS 주소록 간단관리</a
                    ><span class="ico-menu-quick" id="ico-M000500140022" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_usersms.html" onfocus="this.blur();" id="M000500140024"
                      ><em>·</em>회원전용 SMS 지급</a
                    ><span class="ico-menu-quick" id="ico-M000500140024" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_usersmslist.html" onfocus="this.blur();" id="M000500140025"
                      ><em>·</em>회원전용 SMS 지급내역</a
                    ><span class="ico-menu-quick" id="ico-M000500140025" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_sms_auth.html" onfocus="this.blur();" id="M000500140027"
                      ><em>·</em>SMS 정산</a
                    ><span class="ico-menu-quick" id="ico-M000500140027" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050027" onclick="ASIDE_CLICK('M00050027');">
              <input type="hidden" id="M00050027_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050027_OPEN" value="hide" />
              <h3><a href="#this" id="M00050027_H3">카카오 알림톡</a></h3>
              <div id="M00050027_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050027_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_kakao_alimtalk.html" onfocus="this.blur();" id="M000500270001"
                      ><em>·</em>알림톡 소개</a
                    ><span class="ico-menu-quick" id="ico-M000500270001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_kakao_alimtalk_setting.html" onfocus="this.blur();" id="M000500270002"
                      ><em>·</em>알림톡 설정</a
                    ><span class="ico-menu-quick" id="ico-M000500270002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_kakao_alimtalk_template.html" onfocus="this.blur();" id="M000500270004"
                      ><em>·</em>알림톡 템플릿 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500270004" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a
                      href="https://premium264.makeshop.co.kr/newmanager/crm_kakao_alimtalk_templatelist.html"
                      onfocus="this.blur();"
                      id="M000500270005"
                      ><em>·</em>알림톡 템플릿 승인 내역</a
                    ><span class="ico-menu-quick" id="ico-M000500270005" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_kakao_alimtalk_list.html" onfocus="this.blur();" id="M000500270003"
                      ><em>·</em>알림톡 발송내역 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500270003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050023" onclick="ASIDE_CLICK('M00050023');">
              <input type="hidden" id="M00050023_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050023_OPEN" value="hide" />
              <h3><a href="#this" id="M00050023_H3">리턴 멤버쉽(RM)서비스</a></h3>
              <div id="M00050023_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050023_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/rm_intro.html" onfocus="this.blur();" id="M000500230001"
                      ><em>·</em>RM 소개</a
                    ><span class="ico-menu-quick" id="ico-M000500230001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/rm_mms_send.html" onfocus="this.blur();" id="M000500230002"
                      ><em>·</em>RM 메시지 발송</a
                    ><span class="ico-menu-quick" id="ico-M000500230002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a
                      href="https://premium264.makeshop.co.kr/newmanager/crm_smscount.html?sms_page_type=rm_service"
                      onfocus="this.blur();"
                      id="M000500230003"
                      ><em>·</em>RM 메시지 발송 내역</a
                    ><span class="ico-menu-quick" id="ico-M000500230003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/rm_stats.html" onfocus="this.blur();" id="M000500230006"
                      ><em>·</em>RM 통계</a
                    ><span class="ico-menu-quick" id="ico-M000500230006" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050025" onclick="ASIDE_CLICK('M00050025');">
              <input type="hidden" id="M00050025_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050025_OPEN" value="hide" />
              <h3><a href="#this" id="M00050025_H3">다이렉트RM(DRM)</a></h3>
              <div id="M00050025_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050025_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_payrm_about.html" onfocus="this.blur();" id="M000500250001"
                      ><em>·</em>DRM 소개</a
                    ><span class="ico-menu-quick" id="ico-M000500250001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_payrm_setting.html" onfocus="this.blur();" id="M000500250002"
                      ><em>·</em>DRM 설정</a
                    ><span class="ico-menu-quick" id="ico-M000500250002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_payrm_stats.html" onfocus="this.blur();" id="M000500250003"
                      ><em>·</em>DRM 통계</a
                    ><span class="ico-menu-quick" id="ico-M000500250003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050015" onclick="ASIDE_CLICK('M00050015');">
              <input type="hidden" id="M00050015_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050015_OPEN" value="hide" />
              <h3><a href="#this" id="M00050015_H3">통합콜센터</a></h3>
              <div id="M00050015_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050015_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_ctiabout.html" onfocus="this.blur();" id="M000500150001"
                      ><em>·</em>통합콜센터 소개</a
                    ><span class="ico-menu-quick" id="ico-M000500150001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_cticrm.html" onfocus="this.blur();" id="M000500150002"
                      ><em>·</em>일반전화용(KT CRM형)</a
                    ><span class="ico-menu-quick" id="ico-M000500150002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_cticti.html" onfocus="this.blur();" id="M000500150003"
                      ><em>·</em>인터넷전화용(LG CTI형)</a
                    ><span class="ico-menu-quick" id="ico-M000500150003" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_ctijoin.html" onfocus="this.blur();" id="M000500150004"
                      ><em>·</em>통합콜센터 서비스 신청</a
                    ><span class="ico-menu-quick" id="ico-M000500150004" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050018" onclick="ASIDE_CLICK('M00050018');">
              <input type="hidden" id="M00050018_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050018_OPEN" value="hide" />
              <h3><a href="#this" id="M00050018_H3">LGU+ 전국 대표번호</a></h3>
              <div id="M00050018_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050018_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/lgu_keynumber.html" onfocus="this.blur();" id="M000500180001"
                      ><em>·</em>LGU+ 전국 대표번호</a
                    ><span class="ico-menu-quick" id="ico-M000500180001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="lnb-menu" id="M00050024" onclick="ASIDE_CLICK('M00050024');">
              <input type="hidden" id="M00050024_CSS_NAME" value="lnb-menu" /><input type="hidden" id="M00050024_OPEN" value="hide" />
              <h3><a href="#this" id="M00050024_H3">080 수신거부 서비스</a></h3>
              <div id="M00050024_SUB_MENU_LIST" onclick="ASIDE_SUB_CLICK()">
                <ul id="M00050024_SUB_MENU_LIST_UL">
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_ars_rejectjoin.html" onfocus="this.blur();" id="M000500240001"
                      ><em>·</em>080 수신거부 신청/확인</a
                    ><span class="ico-menu-quick" id="ico-M000500240001" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                  <li>
                    <a href="https://premium264.makeshop.co.kr/newmanager/crm_ars_rejectmanager.html" onfocus="this.blur();" id="M000500240002"
                      ><em>·</em>080 수신거부 관리</a
                    ><span class="ico-menu-quick" id="ico-M000500240002" onclick="ICO_LEFTMENU_QUICK('');"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="quick-sch" id="left_quick_search">
            <form name="menuform1" method="post" onsubmit="return false;">
              <fieldset>
                <legend>Quick Search 유형별 검색가능</legend>
                <div class="sch-tit">Quick Search</div>
                <p class="sch-radio-wrap">
                  <label
                    ><input type="radio" name="__menu_form_select" value="product" onclick="__left_search_change('product');" checked="" />
                    상품</label
                  >
                  <label><input type="radio" name="__menu_form_select" value="member" onclick="__left_search_change('member');" /> 회원</label>
                  <label><input type="radio" name="__menu_form_select" value="order" onclick="__left_search_change('order');" /> 주문</label>
                </p>
                <div class="sch-select" id="__left_product_search__">
                  <select name="type" id="_left_search_type_product" style="display: block">
                    <option value="all">전체상품</option>
                    <option value="keyword">키워드</option>
                    <option value="3">메인추천상품</option>
                    <option value="1">메인신상품</option>
                    <option value="2">메인특별상품</option>
                    <option value="4">대분류추천상품</option>
                    <option value="5">메인추가상품1</option>
                    <option value="6">메인추가상품2</option>
                    <option value="7">메인추가상품3</option>
                    <option value="8">메인추가상품4</option>
                    <option value="9">메인추가상품5</option>
                    <option value="10">메인추가상품6</option>
                    <option value="11">메인추가상품7</option>
                    <option value="12">메인추가상품8</option>
                    <option value="13">메인추가상품9</option>
                    <option value="empty">품절된상품</option>
                    <option value="bank">현금결제상품</option>
                    <option value="barcode">상품 바코드</option>
                    <option value="noview">미진열상품</option>
                    <option value="brandcode">상품코드</option>
                    <option value="branduid">상품번호</option>
                    <option value="gid">스타일 코드</option>
                    <option value="supply">사입업체</option>
                    <option value="subtitle">추가 상품명</option>
                    <option value="eng_name">영문 상품명</option>
                  </select>
                  <select name="_left_search_type_member" id="_left_search_type_member" style="display: none">
                    <option value="user_name">이름</option>
                    <option value="user_id">ID</option>
                    <option value="user_hp">핸드폰</option>
                  </select>
                  <input type="hidden" name="order_manager" value="oo" />
                  <select name="_left_search_type_order" id="_left_search_type_order" style="display: none">
                    <option value="order_ordernum">주문번호</option>
                    <option value="order_ordername">주문자명</option>
                  </select>
                  <input
                    type="text"
                    name="keyword"
                    id="keyword"
                    value=""
                    onkeydown="CheckleftKeymenu(event); if (event.keyCode == 13) {__checkmenukeyword(); return false;}"
                  />
                  <p class="btn-sch" id="__left_search_button"><a href="JavaScript:__checkmenukeyword();" onclick="showLeftLayer(event)">검색</a></p>
                </div>
              </fieldset>
            </form>
            <form name="left_crm" action="https://premium264.makeshop.co.kr/newmanager/crmcenter.html" method="post" target="left_crm">
              <input type="hidden" name="id" />
            </form>
            <form name="_left_send" id="_left_send" method="post">
              <input type="hidden" name="ordernum" value="" />
            </form>
          </div>
        </div>
        <!-- end aside -->

        <div class="result-search-mem border-blue" id="search_dynamic_resut" style="background-color: white; position: absolute; z-index: 1000"></div>
        <!-- // .quickmenu-setup-con -->
      </div>
      <!-- end banner -->

      <iframe name="act_frm_memo" width="0" height="0" style="display: none"></iframe>
      <form name="form_memo">
        <input type="hidden" name="type" value="quick_memo_insert" />
        <input type="hidden" name="quick_memo" value="" />
      </form>
      <div id="gomenudiv" style="left: 1200px"><!-- #gomenudiv 참조 하는곳이 있음 --></div>

      <form name="design" method="post" action="https://admin.mypool.co.kr/addimg/design_webftp.html" target="design">
        <input type="hidden" name="admin_id" />
        <input type="hidden" name="id" />
      </form>

      <input type="hidden" id="cti-conn-path" />
      <div class="layer" id="cti-conn-layer">
        <span class="tit"><span id="cti-phone-num"></span> 전화입니다.</span><br />
        <span>회원정보화면으로 연결하시겠습니까?</span><br /><br />
        <div class="btns">
          <a href="#none" onclick="javascript:cti_get_userinfo();">확인</a>
          <a href="#none" onclick="javascript:cti_layer_close();">취소</a>
        </div>
        <a href="#none" class="close" onclick="javascript:cti_layer_close();">닫기</a>
      </div>
    </td>
  </div>
</template>

<script setup></script>

<style scoped>
/* =============================================================================
   ### 공통적용 사항 시작
   ========================================================================== */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}
audio:not([controls]) {
  display: none;
}
[hidden] {
  display: none;
}

@font-face {
  font-family: "Nanum Gothic";
  font-style: normal;
  font-weight: 800;
  src: url(NanumGothic-ExtraBold.eot);
  src: url(NanumGothic-ExtraBold.eot?#iefix) format("embedded-opentype"), url(NanumGothic-ExtraBold.woff2) format("x-woff2"),
    url(NanumGothic-ExtraBold.woff) format("woff"), url(NanumGothic-ExtraBold.ttf) format("truetype");
}

html {
  font-size: 12px;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
html,
button,
input,
select,
textarea {
  font-family: Dotum, sans-serif;
  color: #333333;
  outline: none;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

::-moz-selection {
  background: #fe57a1;
  color: #fff;
  text-shadow: none;
}
::selection {
  background: #fe57a1;
  color: #fff;
  text-shadow: none;
}

a {
  color: #333333;
  text-decoration: none;
}
/*
a:visited { color: #551a8b; }
a:hover { color: #06e; }
a:focus { outline: thin dotted; }
a:hover, a:active { outline: 0; }
*/

abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
blockquote {
  margin: 0;
}
dfn {
  font-style: italic;
}
hr {
  display: none;
}
ins {
  background: #ff9;
  color: #000;
  text-decoration: none;
}
mark {
  background: #ff0;
  color: #000;
  font-style: italic;
  font-weight: bold;
}
pre,
code,
kbd,
samp {
  font-family: monospace, serif;
  _font-family: "courier new", monospace;
  font-size: 1em;
}
pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
}
q {
  quotes: none;
}
q:before,
q:after {
  content: "";
  content: none;
}
small {
  font-size: 85%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
dl {
  margin: 0;
}
dd {
  margin: 0;
}
nav ul,
nav ol {
  list-style: none;
  list-style-image: none;
  margin: 0;
  padding: 0;
}

/*vertical-align: middle;*/
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0;
}
p {
  margin: 0;
}
form {
  margin: 0;
  padding: 0;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
label {
  cursor: pointer;
}
legend {
  overflow: hidden;
  text-indent: -9999px;
  width: 0;
  height: 0;
  font-size: 0;
}
button,
input,
select,
textarea {
  font-size: 1em;
  margin: 0;
  vertical-align: baseline;
  outline: none;
}
button,
input {
  line-height: normal;
}
button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
  *overflow: visible;
}
button[disabled],
input[disabled] {
  cursor: default;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  width: 14px; /*vertical-align: auto !important;*/
}
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}
input:valid,
textarea:valid {
}
input:invalid,
textarea:invalid {
  background-color: #f0dddd;
}
caption {
  display: none;
}

table img {
  vertical-align: middle;
}

.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: black;
  padding: 0.2em 0;
}

.wrapper {
  position: relative;
  width: 100%;
}

.ir {
  display: block;
  border: 0;
  text-indent: -999em;
  overflow: hidden;
  background-color: transparent;
  background-repeat: no-repeat;
  text-align: left;
  direction: ltr;
  *line-height: 0;
}
.ir br {
  display: none;
}
.hidden {
  display: none !important;
  visibility: hidden;
}
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}
.invisible {
  visibility: hidden;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}

.ng-font {
  font-family: "나눔고딕", "Nanum Gothic";
}

aside {
  display: block;
}

.left_now {
  line-height: 39px;
  border-bottom: 1px solid #ddd;
  background: url("../neoimages/new_category/common/bul_plus.gif") no-repeat 7px 17px #eeeeee;
}
.left_now2 {
  border-bottom: 1px solid #fff;
  background: url("../neoimages/new_category/common/bul_hyphen.gif") no-repeat 7px 17px #ffffff;
}

/* @add 2014-09-18
 * @desc 메뉴 도움말 추가
 * @author 개발2팀 김경훈
 */
.lnb-menu .btn-helper {
  position: absolute;
  top: 10px;
  right: 5px;
  width: 13px;
  height: 18px;
  font-weight: normal;
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/btn/btn_new_menulist_helper.png") no-repeat 0 0;
  z-index: 50;
}
.lnb-menu .btn-helper .layer-helper-wrap {
  display: none;
  position: absolute;
  left: 20px;
  top: 0;
  width: 188px;
  border-right: 2px solid #6882a3;
  border-bottom: 2px solid #6882a3;
  background: #fff;
  z-index: 1000;
}
.lnb-menu .btn-helper .layer-helper-wrap span.edge {
  display: block;
  position: absolute;
  top: -1px;
  left: -7px;
  width: 8px;
  height: 9px;
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/bg/bg_leftmenu_box_edge.gif") no-repeat 0 0;
}
.lnb-menu .btn-helper .layer-helper-wrap .layer-helper {
  position: relative;
  top: -1px;
  padding: 10px;
  margin-bottom: -1px;
  border: 1px solid #40485d;
  background: #fff;
  color: #000;
  cursor: default;
}
.lnb-menu .btn-helper .layer-helper-wrap .layer-helper dt {
  color: #0066ae;
  line-height: 15px;
}
.lnb-menu .btn-helper .layer-helper-wrap .layer-helper dd {
  margin-top: 5px;
  font-size: 11px;
  color: #6d6d6d;
  line-height: 15px;
}

/* @add 2014-09-18
	 * @desc 메뉴 고정, 해제 추가
	 * @author R&D팀 김경훈
	 */
.lnb-menu .menu-hold {
  position: absolute;
  width: 32px;
  height: 22px;
  top: 7px;
  right: 24px;
}
.lnb-menu .menu-hold.hold-off {
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/btn/new_menu_hold_off.gif") no-repeat 0 0;
}
.lnb-menu .menu-hold.hold-on {
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/btn/new_menu_hold_on.gif") no-repeat 0 0;
}
.lnb-menu .menu-hold a {
  display: block;
  text-indent: -9999px;
  width: 100%;
  height: 100%;
}

/* =============================================================================
   왼쪽 퀵서치 관련
   ========================================================================== */

.fl {
  float: left;
}
.fr {
  float: right;
}
.result-search-mem {
  position: absolute;
  width: 420px;
  height: 165px;
  display: none;
}
.list-mem-area {
  height: 107px;
}
.result-search-mem-2 {
  width: 400px;
}
.result-search-mem-2 p {
  padding: 25px 0;
  font-weight: bold;
}

*:first-child + html .btn-close {
  padding-top: 6px;
}
.check-con span.btn-close {
  position: absolute;
  right: 5px;
  top: 5px;
}

.tit-area {
  height: 27px;
  line-height: 27px;
  padding: 0 10px;
  background: #2868de;
}
.tit-area h2 {
  font-size: 11px;
  color: white;
  font-weight: normal;
}

.inner-con {
  padding: 10px;
}
.overflow-y {
  overflow-y: scroll;
}

.border-blue {
  border: 2px solid #2868de;
}
.border-blue-2 {
  border: 1px solid #2868de;
}

.board-type-04 {
  border: 1px solid #ddd;
  line-height: 28px;
}
.board-type-04 thead tr th {
  background: #f6f6f6;
  border: 1px solid #dadada;
  color: #333;
  font-weight: bold;
}
.board-type-04 tbody {
  border: none;
}
.board-type-04 tbody tr td {
  border: 1px solid #dadada;
  text-align: center;
  vertical-align: middle;
}

/* =============================================================================
   버튼
   ========================================================================== */
a.btn-gray-h20 {
  display: inline-block;
  padding-right: 0px;
  font-size: 11px;
  color: #444;
  height: 20px;
  line-height: 22px;
  letter-spacing: -1px;
  word-spacing: -1px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #ccc;
  border-top: 1px solid #e0e0e0;
  background: url(../neoimages/new_category/common/bg_gray_h20.gif) repeat 0 0;
}
a.btn-gray-h20 span,
a.btn-gray-h20 strong {
  display: block;
  padding: 1px 6px 0 6px;
}
a.btn-gray-h20-s {
  display: inline-block;
  padding-right: 0px;
  font-size: 11px;
  color: #444;
  height: 20px;
  line-height: 22px;
  letter-spacing: -1px;
  word-spacing: -1px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #ccc;
  border-top: 1px solid #e0e0e0;
  background: url(../neoimages/new_category/common/bg_gray_h20.gif) repeat 0 0;
}
a.btn-gray-h20-s span,
a.btn-gray-h20-s strong {
  display: block;
  padding: 1px 3px 0 3px;
}
a.btn-whitegray-h20 {
  display: inline-block;
  padding-right: 0px;
  font-size: 11px;
  color: #444;
  height: 20px;
  line-height: 22px;
  letter-spacing: -1px;
  word-spacing: -1px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #c1c6ca;
  background-color: #edf2f5;
}
a.btn-whitegray-h20 span,
a.btn-whitegray-h20 strong {
  display: block;
  padding: 1px 6px 0 6px;
}
a.btn-gray-h48 {
  display: inline-block;
  padding-right: 5px;
  font-size: 12px;
  color: #666;
  height: 48px;
  line-height: 50px;
  letter-spacing: -1px;
  word-spacing: -1px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #ccc;
  border-top: 1px solid #e0e0e0;
  background: url(../neoimages/new_category/common/bg_gray_h48.gif) repeat 0 0;
}
a.btn-gray-h48 span,
a.btn-gray-h48 strong {
  display: block;
  padding: 1px 6px 0 11px;
}
a.btn-green-h30 {
  display: inline-block;
  padding-right: 30px;
  font-size: 12px;
  color: #fff;
  height: 30px;
  line-height: 32px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #007607;
  background-color: #0eb118;
}
a.btn-green-h30 span,
a.btn-green-h30 strong {
  display: block;
  padding: 1px 6px 0 36px;
}
a.btn-blue-h30 {
  display: inline-block;
  padding-right: 30px;
  font-size: 12px;
  color: #fff;
  height: 30px;
  line-height: 32px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #0e357e;
  background-color: #215dbd;
}
a.btn-blue-h30 span,
a.btn-blue-h30 strong {
  display: block;
  padding: 1px 6px 0 36px;
}
a.btn-blue-h30-s {
  display: inline-block;
  padding-right: 6px;
  font-size: 12px;
  color: #fff;
  height: 30px;
  line-height: 32px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #0e357e;
  background-color: #215dbd;
}
a.btn-blue-h30-s span,
a.btn-blue-h30-s strong {
  display: block;
  padding: 1px 6px 0 13px;
}
a.btn-white-h30-s {
  display: inline-block;
  padding-right: 6px;
  font-size: 12px;
  color: #444;
  height: 30px;
  line-height: 32px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #ccc;
  background-color: #fff;
}
a.btn-white-h30-s span,
a.btn-white-h30-s strong {
  display: block;
  padding: 1px 6px 0 13px;
}
a.btn-darkgray-h20 {
  display: inline-block;
  padding-right: 0;
  font-size: 11px;
  color: #fff;
  height: 20px;
  line-height: 22px;
  letter-spacing: -1px;
  word-spacing: -1px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #666;
  background-color: #8e8e8e;
}
a.btn-darkgray-h20 span,
a.btn-darkgray-h20 strong {
  display: block;
  padding: 1px 6px 0 6px;
}
a.btn-lightblue-h20 {
  display: inline-block;
  padding-right: 0;
  font-size: 11px;
  color: #fff;
  height: 20px;
  line-height: 22px;
  letter-spacing: -1px;
  word-spacing: -1px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #0f62cb;
  background-color: #2a7add;
}
a.btn-lightblue-h20 span,
a.btn-lightblue-h20 strong {
  display: block;
  padding: 1px 6px 0 6px;
}
a.btn-jingray-h20 {
  display: inline-block;
  padding-right: 0px;
  font-size: 11px;
  color: #444;
  height: 20px;
  line-height: 22px;
  letter-spacing: -1px;
  word-spacing: -1px;
  text-decoration: none !important;
  white-space: nowrap;
  border: 1px solid #ccc;
  border-top: 1px solid #e0e0e0;
  background: url(../neoimages/new_category/common/btn_jingray_h20.gif) repeat 0 0;
}
a.btn-jingray-h20 span,
a.btn-jingray-h20 strong {
  display: block;
  padding: 1px 6px 0 6px;
}

/* =============================================================================
	* @add 2019-09
	* @desc 신디자인 좌측메뉴 공통
	* @author separk
   ========================================================================== */
body {
  height: 100% !important;
}
#manager {
  background: #fff url("https://premium264.makeshop.co.kr/newmanager/neoimages/common/bg_body_content.gif") repeat-y 0 0 !important; /* width:auto; */
}
#manager:after {
  clear: both;
  display: block;
  content: "";
}
#menu_area {
  width: 200px;
  margin: 0;
  font-family: "Malgun Gothic" !important;
  background: #fff;
  line-height: 1.5;
  color: #000;
}
#menu_area.off {
  width: 0 !important;
} /* 좌측 close */
#banner {
  position: relative;
  width: 200px;
  height: 100% !important;
  background: #fff;
} /* (구)페이지 왼쪽메뉴 열기 위치 잡기위해 필요 */
#banner.off {
  width: 0 !important;
} /* 좌측 close - (구)페이지 */
#leftlayer1 {
  top: 55px !important;
} /* https://premium264.makeshop.co.kr/newmanager/neoimages/new_left_menu_open.gif = open 미사용 */
#leftlayer2 {
  top: 55px !important;
} /* https://premium264.makeshop.co.kr/newmanager/neoimages/new_left_menu_close.gif = close 미사용 */
#right-quick {
  display: block;
} /* 기존 우측 퀵메뉴 노출 */
#container a {
  text-decoration: none;
}
body {
  margin: 0;
} /* (구)페이지 제어용 */
#aside input[type="checkbox"],
#aside input[type="radio"] {
  vertical-align: middle !important;
}

/* aside, LNB  */
#aside {
  position: relative;
  display: block;
  width: 199px;
  height: 100%;
  border-right: 1px solid #aaa;
  background: #fff;
  letter-spacing: -1px;
  font-size: 12px;
  font-family: "Malgun Gothic" !important;
}
#aside a {
  color: #000;
  text-decoration: none;
  outline: none;
  background: none;
}
#aside a:visited,
#aside a:hover,
#aside a:link,
#aside a:active {
  color: #000;
}
#aside a:hover,
#aside a:active,
#aside a:focus {
  outline: none;
  text-decoration: none;
}
#aside img {
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}
#aside form {
  margin: 0;
  padding: 0;
}
#aside fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
#aside legend {
  overflow: hidden;
  text-indent: -9999px;
  width: 0;
  height: 0;
  font-size: 0;
}
#aside label {
  cursor: pointer;
}
#aside h3,
#aside h4,
#aside p {
  padding: 0;
  margin: 0;
}

#aside #btn-newleftmenu-close {
  z-index: 1;
  display: inline-block;
  position: absolute;
  top: 16px;
  right: -33px;
  width: 74px;
  height: 55px;
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/new_category/btn_h29_new_left_menu_close.gif") no-repeat 0 0;
}
#aside #btn-newleftmenu-close.on {
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/new_category/btn_h29_new_left_menu_close_over.gif") no-repeat 0 0;
}
#aside #btn-newleftmenu-open {
  z-index: 1;
  display: none;
  position: absolute;
  top: 16px;
  left: 10px;
  width: 29px;
  height: 29px;
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/new_category/btn_h29_new_left_menu_open.gif") no-repeat 0 0;
} /* 왼쪽메뉴 열기 */
#aside.off {
  width: 0 !important;
  padding: 0 !important;
} /* 좌측 close 일때 메뉴리스트 숨기기 */
#aside.off #wrap-aside-2019 {
  display: none;
} /* 좌측 close 일때 메뉴리스트 숨기기 */
#aside.off #btn-newleftmenu-close {
  display: none;
} /* 왼쪽 메뉴 닫기 */
#aside.off #btn-newleftmenu-open {
  display: inline-block;
} /* 왼쪽 메뉴 열기 */

#aside .aside-tit {
  padding: 19px 0 15px 0;
  text-align: center;
  line-height: 1.5;
}
#aside .aside-tit h2 {
  padding: 3px 0 2px;
  color: #000;
  font-size: 18px;
  font-weight: bold;
}
#aside .aside-tit .btn-help {
  display: inline-block;
  height: 20px;
  line-height: 17px;
  padding: 0 7px;
  margin: 5px auto 0;
  border: 1px solid #c4c4c4;
  font-family: "Malgun Gothic";
  color: #000;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
}
#aside .lnb {
  width: 100%;
}
#aside .lnb .lnb-menu {
  position: relative;
  border-top: 1px solid #dfdfdf;
  background: #fff;
}
#aside .lnb .lnb-menu h3 {
  height: 38px;
  line-height: 35px;
  margin: 0 10px;
  font-weight: bold;
}
#aside .lnb .lnb-menu h3 a {
  display: block;
  font-size: 13px;
  color: #000;
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/common/common_left_plus.png") no-repeat right 14px;
}
#aside .lnb .lnb-menu ul {
  display: none;
}
#aside .lnb .lnb-menu ul li {
  position: relative;
}
#aside .lnb .lnb-menu ul li a {
  display: block;
  line-height: 14px;
  font-size: 12px;
  color: #666;
  font-weight: normal;
  letter-spacing: -1.5px;
}
#aside .lnb .lnb-menu h3 a .ico-new {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: -1px 0 0 3px;
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/common/common_left_new.png") no-repeat 0 0;
  vertical-align: middle;
}
#aside .lnb .lnb-menu.now {
  z-index: 1;
  padding: 2px 0 11px;
  margin-bottom: -1px;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  background: #f1f1f1;
}
#aside .lnb .lnb-menu.now h3 {
  height: 36px;
  line-height: 33px;
}
#aside .lnb .lnb-menu.now h3 a {
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/common/common_left_minus.png") no-repeat right 14px;
}
#aside .lnb .lnb-menu.now ul {
  display: block;
}
#aside .lnb .lnb-menu.now ul li > a {
  padding: 6px 30px 8px 11px;
}
#aside .lnb .lnb-menu.now ul li > a em {
  display: inline-block;
  padding-right: 7px;
}
#aside .lnb .lnb-menu.now ul li > a .ico-new {
  display: inline-block;
  width: 4px;
  height: 4px;
  margin: -7px 0 0 3px;
  border-radius: 10px;
  background: #fd0100;
  vertical-align: middle;
}
#aside .lnb .lnb-menu.now ul li.now > a {
  padding-top: 5px;
  padding-bottom: 7px;
  margin: 3px 0 2px;
  color: #fff;
  font-weight: bold;
  background: #2a61dd;
}
#aside .lnb .lnb-menu.now ul li.now > a em {
  font-weight: normal;
}
#aside .lnb .lnb-menu.now ul li.now .ico-menu-quick {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  width: 36px;
  height: 26px;
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/common/common_left_quick.gif") no-repeat center 5px;
  cursor: pointer;
}
#aside .lnb .lnb-menu.now ul li.now .ico-menu-quick.on {
  background: url("https://premium264.makeshop.co.kr/newmanager/neoimages/common/common_left_quick_on.gif") no-repeat center 5px;
}

#aside .quick-sch {
  padding: 0 10px;
  border-top: 1px solid #acacad;
  border-bottom: 1px solid #acacad;
  background: #f2f7fc;
}
#aside .quick-sch .sch-tit {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #2a61dd;
  letter-spacing: 0;
}
#aside .quick-sch .sch-radio-wrap {
  font-size: 13px;
  color: #000;
}
#aside .quick-sch .sch-radio-wrap label {
  display: inline-block;
  padding-right: 7px;
}
#aside .quick-sch .sch-radio-wrap label input {
  margin: 0;
  padding: 0;
  vertical-align: middle;
}
#aside .quick-sch .sch-select {
  position: relative;
  margin: 10px 0 16px;
}
#aside .quick-sch .sch-select select {
  width: 125px;
  height: 22px;
  line-height: 22px;
}
#aside .quick-sch .sch-select input {
  width: 123px;
  height: 20px;
  line-height: 22px;
  margin-top: 5px;
  border: 1px solid #aaa;
}
#aside .quick-sch .sch-select .btn-sch {
  position: absolute;
  bottom: 0;
  left: 130px;
}
#aside .quick-sch .sch-select .btn-sch a {
  display: inline-block;
  width: 51px;
  height: 49px;
  line-height: 47px;
  color: #fff;
  font-size: 14px;
  background: #aaa;
  text-align: center;
}

.layer {
  z-index: 2;
  position: absolute;
  width: 264px;
  height: 104px;
  padding-top: 26px;
  border: 1px solid #232323;
  background-color: #373737;
  text-align: center;
  display: none;
}
.layer span {
  line-height: 24px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}
.layer span.tit {
  font-size: 14px;
}
.layer span span {
  color: #fcdd62;
  letter-spacing: -1px;
  font-size: 11pt;
}
.layer .btns {
  padding-bottom: 5px;
}
.layer .btns a {
  width: 44px;
  height: 20px;
  line-height: 22px;
  text-indent: -6px;
  background: url(./images/crmcenter/bg_btn_h20.gif) no-repeat 0 0;
  font-size: 11px;
}
.close {
  position: absolute;
  top: 9px;
  right: 9px;
  width: 12px;
  height: 12px;
  display: block;
  background: url(./images/crmcenter/btn_close_h12.gif) no-repeat 0 0;
  text-indent: -9999px;
}

.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
#right-quick * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 99;
}
#right-quick {
  display: none;
  position: absolute;
  _position: absolute;
  top: 44px;
  _top: expression(eval(document.body.scrollTop));
  left: 0;
  width: auto;
  height: 95%;
  z-index: 99;
}
#right-quick .tab-inner {
  height: 100%;
}
#right-quick .header-wrap {
  position: relative;
  background-color: #6593e8;
}
#right-quick .header-wrap h3 {
  width: 69px;
  height: 36px;
  background: url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/quick_small.gif) no-repeat 50% 50%;
  margin: 0;
}
#right-quick .header-wrap .toggle-btn {
  outline: none;
  position: absolute;
  top: 0;
  left: -22px;
  display: block;
  width: 22px;
  height: 36px;
  background: #5b87d9 url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/toggle_off.gif) no-repeat 50% 50%;
}
#right-quick .header-wrap .preferences-btn {
  outline: none;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 36px;
  background: url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/preferences.gif) no-repeat 50% 50%;
}
#right-quick .tab-wrap {
  position: relative;
  display: none;
  width: 140px;
}
#right-quick .tab-wrap .tabs {
  margin: 0;
  padding: 0;
}
#right-quick .tab-wrap .tabs li {
  float: left;
  width: 50%;
  height: 44px;
  display: inilne-block;
}
#right-quick .tab-wrap .tabs .menu {
  background: #a8a8a8 url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/ico_menu_off.gif) no-repeat 50% 50%;
}
#right-quick .tab-wrap .tabs .memo {
  background: #a8a8a8 url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/ico_memo_off.gif) no-repeat 50% 50%;
}
#right-quick .tab-wrap .tabs .memo-on {
  background: #3d3d3d url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/ico_memo_on.gif) no-repeat 50% 50%;
}
#right-quick .tab-wrap .tabs .menu-on {
  background: #3d3d3d url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/ico_menu_on.gif) no-repeat 50% 50%;
}
#right-quick .tab-wrap .tabs li a {
  display: block;
  width: 100%;
  height: 100%;
}
#right-quick .menu-wrap {
  position: relative;
  height: 100%;
  border-top: 1px solid #000;
  overflow: hidden;
}
#right-quick .menu-wrap .menus {
  float: left;
  height: 100%;
  padding: 0 7px;
  border-top: 1px solid #4b4c4d;
  background-color: #313131;
  font-size: 0;
}
#right-quick .menu-wrap .menus li {
  width: 56px;
  height: 30px;
  line-height: 29px;
  border-bottom: 1px solid #4b4c4d;
}
#right-quick .menu-wrap .menus .first_prev {
  margin-top: 5px;
  height: 98px;
  line-height: 29px;
  border-bottom: 1px solid #4b4c4d;
  text-align: center;
}
#right-quick .menu-wrap .menus .first {
  margin-top: 5px;
}
#right-quick .menu-wrap .menus .last {
  height: auto;
  line-height: normal;
  text-align: center;
  margin-top: 15px;
  border-bottom: none;
}
#right-quick .menu-wrap .menus .last span {
  display: block;
}
#right-quick .menu-wrap .menus .last img {
  border: none;
}
#right-quick .menu-wrap .menus .last_f {
  padding-top: 10px;
  height: 60px;
  border: 0px solid white;
  margin-left: -6px;
  margin-right: -6px;
}
#right-quick .menu-wrap .menus .sp_last1 {
  margin-top: 10px;
  text-align: center;
  border-bottom: none;
}
#right-quick .menu-wrap .menus .sp_last1 img {
  margin-bottom: 5px;
}
#right-quick .menu-wrap .menus .sp_last2 {
  margin-top: 5px;
  text-align: center;
  border-bottom: none;
}
#right-quick .menu-wrap .menus a {
  display: block;
  font-family: Dotum;
  font-size: 11px;
  color: #f7f7f7;
}
#right-quick .menu-wrap .menus a:hover {
  text-decoration: none;
}
#right-quick .menu-wrap .menus.expend {
  display: none;
  background-color: #3d3d3d;
}
#right-quick .memo-wrap {
  display: none;
  position: relative;
  height: 100%;
  border-top: 1px solid #000;
}
#right-quick .memo-wrap .memos {
  text-align: right;
  height: 100%;
  padding: 22px 7px;
  border-top: 1px solid #4b4c4d;
  background-color: #313131;
}
#right-quick .memo-wrap .memos textarea {
  line-height: 30px;
  width: 124px;
  max-width: 127px;
  height: 445px;
  display: block;
  border: none;
  background: url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/bg_textarea.gif) repeat 0 0;
}
#right-quick .memo-wrap .memos a:hover {
  text-decoration: none;
}
#right-quick .memo-wrap .memos .save-btn {
  margin-top: 5px;
  text-align: center;
  font-family: Dotum;
  font-size: 11px;
  display: inline-block;
  padding: 0 15px;
  height: 27px;
  line-height: 27px;
  color: #fff;
  border: 1px solid #2262cb;
  background-color: #327add;
}

#right-quick.toggle-on {
}
#right-quick.toggle-on .header-wrap h3 {
  width: 138px;
  background-image: url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/quick_normal.gif);
}
#right-quick.toggle-on .header-wrap .toggle-btn {
  background-image: url(https://premium264.makeshop.co.kr/newmanager/neoimages/common/toggle_on.gif);
}
#right-quick.toggle-on .header-wrap .preferences-btn {
  display: block;
}
#right-quick.toggle-on .menu-wrap .menus.expend {
  display: block;
}
#right-quick.toggle-on .tab-wrap {
  display: block;
}

* html #right-quick {
  width: 70px;
}
* html #right-quick.toggle-on {
  width: 140px;
}
* html #right-quick .tab-inner {
  height: expression(eval(document.body.clientHeight) - 36);
}
* html #right-quick.toggle-on .tab-inner {
  height: expression(eval(document.body.clientHeight) - 80);
}
</style>
