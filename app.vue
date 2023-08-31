<template>
  <div>
    <Header />
    <SideBar />
    <div class="wrap">
      <div class="title-wrap relative w-full">
        <p class="title">회원/<span>CRM</span> 관리하기</p>
        <p class="tab">회원관리 > 회원/CRM 관리하기</p>
        <p class="text-base mt-3">회원 및 추천인에 관련된 모든 정보를 한페이지에서 관리하실 수가 있습니다!</p>
        <div class="absolute right-0 bottom-3">
          <Button class="ml-[10px] h-8 text-base" severity="secondary" label="메뉴설명" size="small" />
        </div>
      </div>
      <div class="flex items-center border border-solid border-[#C7C7E4] mt-[15px] text-base">
        <div class="w-40 h-[80px] leading-[80px] text-center bg-[#D9D9F5]">회원검색</div>
        <div class="bg-white w-full p-2 h-[80px] flex items-center justify-between">
          <ul>
            <li class="flex items-center">
              검색조건 :
              <RadioButton class="ml-3" v-model="ingredient" inputId="ingredient1" name="아이디" value="아이디" />
              <label for="ingredient1" class="ml-1">아이디</label>
              <RadioButton class="ml-3" v-model="ingredient" inputId="ingredient2" name="회원명" value="회원명" />
              <label for="ingredient2" class="ml-1">회원명</label>
              <RadioButton class="ml-3" v-model="ingredient" inputId="ingredient3" name="이메일" value="이메일" />
              <label for="ingredient3" class="ml-1">이메일</label>
              <RadioButton class="ml-3" v-model="ingredient" inputId="ingredient4" name="연락처" value="연락처" />
              <label for="ingredient4" class="ml-1">연락처</label>
              <RadioButton class="ml-3" v-model="ingredient" inputId="ingredient5" name="핸드폰번호" value="핸드폰번호" />
              <label for="ingredient5" class="ml-1">핸드폰번호</label>
              <RadioButton class="ml-3" v-model="ingredient" inputId="ingredient6" name="생년월일" value="생년월일" />
              <label for="ingredient6" class="ml-1">생년월일</label>
              <RadioButton class="ml-3" v-model="ingredient" inputId="ingredient7" name="CID" value="CID" />
              <label for="ingredient7" class="ml-1">CID</label>
            </li>
            <li class="mt-[4px]">
              입력하기 :
              <InputText class="ml-2 w-60 h-8" type="text" v-model="value" />
            </li>
          </ul>
          <Button class="w-16 h-9" label="검색" size="small" />
        </div>
      </div>
      <div class="flex items-center border border-solid border-[#d7d7d7] mt-[15px] text-base">
        <div class="w-40 h-[60px] leading-[60px] text-center bg-[#ebebeb]">그룹검색</div>
        <div class="bg-white w-full p-2 h-[60px] flex justify-between items-center">
          <ul class="flex items-center">
            <li>
              <Dropdown class="h-8 flex items-center text-base" v-model="selectedGroup" :options="groups" placeholder="해당 그룹을 선택하세요." />
            </li>
            <li>
              <p class="ml-2">그룹내 회원명 : <InputText class="ml-2 w-40 h-8" type="text" v-model="gropusUser" /></p>
            </li>
            <li class="flex items-center ml-4">
              <Checkbox v-model="birth" :binary="true" />
              <p class="ml-1">생일검색 :</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedmonth" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">월</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selecteddaily" :options="daily" optionLabel="name" placeholder="" />
              <p class="ml-1">일</p>
            </li>
          </ul>
          <Button class="w-16 h-9" label="검색" size="small" />
        </div>
      </div>
      <div class="flex items-center border border-solid border-[#d7d7d7] mt-[5px] text-base">
        <div class="w-40 h-[60px] leading-[60px] text-center bg-[#ebebeb]">CRM 그룹검색</div>
        <div class="bg-white w-full p-2 h-[60px] flex justify-between items-center">
          <ul class="flex items-center">
            <li>
              <RadioButton class="" v-model="crm" inputId="crm1" name="전체회원" value="전체회원" />
              <label for="crm1" class="ml-1">전체회원</label>
              <RadioButton class="ml-3" v-model="crm" inputId="crm2" name="최우수고객" value="최우수고객" />
              <label for="crm2" class="ml-1">최우수고객</label>
              <RadioButton class="ml-3" v-model="crm" inputId="crm3" name="우수고객" value="우수고객" />
              <label for="crm3" class="ml-1">우수고객</label>
              <RadioButton class="ml-3" v-model="crm" inputId="crm4" name="일반고객" value="일반고객" />
              <label for="crm4" class="ml-1">일반고객</label>
              <RadioButton class="ml-3" v-model="crm" inputId="crm5" name="주의고객" value="주의고객" />
              <label for="crm5" class="ml-1">주의고객</label>
              <RadioButton class="ml-3" v-model="crm" inputId="crm6" name="항의고객" value="항의고객" />
              <label for="crm6" class="ml-1">항의고객</label>
            </li>
          </ul>
          <Button class="w-16 h-9" label="검색" size="small" />
        </div>
      </div>
      <div class="flex items-center border border-solid border-[#d7d7d7] mt-[5px] text-base">
        <div class="w-40 h-[60px] leading-[60px] text-center bg-[#ebebeb]">조건검색</div>
        <div class="bg-white w-full p-2 h-[60px] flex justify-between items-center">
          <ul class="flex items-center">
            <li class="flex items-center">
              <RadioButton class="" v-model="searchCondition" inputId="condition1" name="login" value="login" />
              <label for="crm1" class="ml-1 flex items-center">
                <Dropdown class="w-16 h-8 flex items-center" v-model="selectedSearchMonth1" :options="month" optionLabel="name" placeholder="" />
                <p class="ml-1">월</p>
                <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedSearchDay1" :options="daily" optionLabel="name" placeholder="" />
                <p class="ml-1">일 로그인</p>
              </label>
              <RadioButton class="ml-3" v-model="searchCondition" inputId="condition2" name="todayJoin" value="todayJoin" />
              <label for="crm2" class="ml-1">오늘 회원가입</label>
              <RadioButton class="ml-3" v-model="searchCondition" inputId="condition3" name="birthday" value="birthday" />
              <label for="crm3" class="ml-1 flex items-center">
                <Dropdown class="w-16 h-8 flex items-center" v-model="selectedSearchMonth2" :options="month" optionLabel="name" placeholder="" />
                <p class="ml-1">월</p>
                <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedSearchDay2" :options="daily" optionLabel="name" placeholder="" />
                <p class="ml-1">일 생일회원</p>
              </label>
            </li>
          </ul>
          <Button class="w-16 h-9" label="검색" size="small" />
        </div>
      </div>
      <div class="flex items-center border border-solid border-[#d7d7d7] mt-[5px] text-base">
        <div class="w-40 py-14 text-center bg-[#ebebeb]">가입일검색</div>
        <div class="bg-white w-full p-2 py-3 flex items-center justify-between">
          <ul>
            <li>
              <Button class="h-7" label="어제" severity="secondary" outlined size="small" />
              <Button class="h-7 ml-2" label="당일" severity="secondary" outlined size="small" />
              <Button class="h-7 ml-2" label="3일" severity="secondary" outlined size="small" />
              <Button class="h-7 ml-2" label="일주일" severity="secondary" outlined size="small" />
            </li>
            <li class="flex items-center mt-2">
              기간선택 :
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedJoinYear1" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">년</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedJoinMonth1" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">월</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedJoinDay1" :options="daily" optionLabel="name" placeholder="" />
              <p class="ml-1">일 ~</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedJoinYear2" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">년</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedJoinMonth2" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">월</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedJoinDay2" :options="daily" optionLabel="name" placeholder="" />
              <p class="ml-1">일</p>
            </li>
            <li class="mt-[4px] flex items-center">
              <p>가입경로 :</p>
              <Dropdown class="h-8 flex items-center ml-2" v-model="selectedJoinType1" :options="joinType" optionLabel="name" placeholder="" />
              <p class="ml-6">가입형태 :</p>
              <Dropdown class="h-8 flex items-center ml-2" v-model="selectedJoinType2" :options="joinType2" optionLabel="name" placeholder="" />
            </li>
          </ul>
          <Button class="w-16 h-9" label="검색" size="small" />
        </div>
      </div>
      <div class="flex items-center border border-solid border-[#d7d7d7] mt-[5px] text-base">
        <div class="w-40 py-14 text-center bg-[#ebebeb]">추천인검색</div>
        <div class="bg-white w-full p-2 py-3 flex items-center justify-between">
          <ul>
            <li class="flex items-center">
              <Checkbox v-model="selectedPeriodSearch" :binary="true" />
              <p class="ml-1">기간검색</p>
              <Button class="h-7 ml-2" label="어제" severity="secondary" outlined size="small" />
              <Button class="h-7 ml-2" label="당일" severity="secondary" outlined size="small" />
              <Button class="h-7 ml-2" label="3일" severity="secondary" outlined size="small" />
              <Button class="h-7 ml-2" label="일주일" severity="secondary" outlined size="small" />
            </li>
            <li class="flex items-center mt-2">
              기간선택 :
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedRecommendYear1" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">년</p>
              <Dropdown
                class="w-16 h-8 flex items-center ml-2"
                v-model="selectedRecommendMonth1"
                :options="month"
                optionLabel="name"
                placeholder=""
              />
              <p class="ml-1">월</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedRecommendDay1" :options="daily" optionLabel="name" placeholder="" />
              <p class="ml-1">일 ~</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedRecommendYear2" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">년</p>
              <Dropdown
                class="w-16 h-8 flex items-center ml-2"
                v-model="selectedRecommendMonth2"
                :options="month"
                optionLabel="name"
                placeholder=""
              />
              <p class="ml-1">월</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedRecommendDay2" :options="daily" optionLabel="name" placeholder="" />
              <p class="ml-1">일</p>
            </li>
            <li class="mt-[4px] flex items-center">
              <p>추천인ID :</p>
              <InputText class="ml-2 w-60 h-8" type="text" v-model="selectedRecommender" />
            </li>
          </ul>
          <Button class="w-16 h-9" label="검색" size="small" />
        </div>
      </div>
      <div class="flex items-center border border-solid border-[#d7d7d7] mt-[5px] text-base">
        <div class="w-40 py-6 text-center bg-[#ebebeb]">휴면예정 회원검색</div>
        <div class="bg-white w-full p-2 py-2 flex items-center justify-between">
          <ul>
            <li class="flex items-center">
              기간선택 :
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedDormancydYear1" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">년</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedDormancyMonth1" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">월</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedDormancyDay1" :options="daily" optionLabel="name" placeholder="" />
              <p class="ml-1">일 ~</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedDormancyYear2" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">년</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedDormancyMonth2" :options="month" optionLabel="name" placeholder="" />
              <p class="ml-1">월</p>
              <Dropdown class="w-16 h-8 flex items-center ml-2" v-model="selectedDormancyDay2" :options="daily" optionLabel="name" placeholder="" />
              <p class="ml-1">일</p>
            </li>
          </ul>
          <Button class="w-16 h-9" label="검색" size="small" />
        </div>
      </div>
      <div class="flex flex-wrap gap-2 py-3">
        <Button class="w-30 h-9 px-2" label="적립금 수기지급 조회" severity="secondary" outlined size="small" />
        <Button class="w-30 h-9 px-2" label="적립금 지급요청 관리" severity="secondary" outlined size="small" />
        <Button class="w-30 h-9 px-2" label="평생->일반 전환내역" severity="secondary" outlined size="small" />
        <Button class="w-30 h-9 px-2" label="휴면->일반 전환내역" severity="secondary" outlined size="small" />
        <Button class="w-30 h-9 px-2" label="부정의심 로그인" severity="secondary" outlined size="small" />
        <Button class="w-30 h-9 px-2" label="회원수기등록" severity="secondary" outlined size="small" />
        <Button class="w-30 h-9 px-2" label="회원등급관리" severity="secondary" outlined size="small" />
        <Button class="w-30 h-9 px-2" label="회원탈퇴관리" severity="secondary" outlined size="small" />
      </div>
      <div class="relative mt-4">
        <div class="absolute flex gap-2 right-0 text-base">
          <p>검색회원 적립금 : 0원</p>
          <p>전체회원 예치금 : 0원</p>
          <p>검색회원 0명</p>
          <p>page 1/0</p>
        </div>
        <div class="absolute flex items-center right-0 top-6 text-base">
          <p>정렬방법 :</p>
          <Dropdown class="ml-2 text-[10px]" v-model="selectedSrot" :options="sortType" optionLabel="name" placeholder="" />
        </div>
        <div class="absolute flex items-center left-0 top-6 text-base">
          <Button icon="pi pi-file-excel" label="EXCEL" severity="success" size="small" outlined></Button>
          <Dropdown class="ml-4 text-[10px]" v-model="selectedPrint" :options="printCount" optionLabel="" placeholder="" />
          <p class="ml-1">개씩 출력</p>
          <Checkbox class="ml-4" v-model="userColor" :binary="true" />
          <p class="ml-1">회원그룹 색상 구분</p>
        </div>
        <div class="pt-20">
          <DataTable class="text-sm" :value="user" tableStyle="min-width: 50rem">
            <Column field="ip" header="IP"></Column>
            <Column field="date" header="등록일"> </Column>
            <Column field="id" header="ID(비밀번호)">
              <template #body="slotProps">
                <button>{{ slotProps.data.id }}</button>
              </template>
            </Column>
            <Column field="name" header="성명"></Column>
            <Column field="mail" header="메일">
              <template #body="slotProps">
                <button><i class="pi pi-at"></i></button>
              </template>
            </Column>
            <Column field="memo" header="메모">
              <template #body="slotProps">
                <button><i class="pi pi-pencil"></i></button>
              </template>
            </Column>
            <Column field="addr" header="주소"></Column>
            <Column field="tel" header="전화">
              <template #body="slotProps">
                <button><i class="pi pi-tablet"></i></button>
              </template>
            </Column>
            <Column field="saved" header="적립금관리">
              <template #body="slotProps">
                <p>{{ slotProps.data.saved }}</p>
                <button><i class="pi pi-pencil"></i></button>
                <button class="text-blue">상세</button>
              </template>
            </Column>
            <Column field="breakdown" header="내역">
              <template #body="slotProps">
                <button class="text-blue-500">구매</button> |
                <button class="text-red-500">쿠폰</button>
              </template>
            </Column>
            <Column field="recommender" header="추천인">
              <template #body="slotProps">
                <p>{{ slotProps.data.recommender }}</p>
              </template>
            </Column>
            <Column field="info" header="정보">
              <template #body>
                <button class="text-sm">수정</button>
              </template>
            </Column>
            <Column field="counsel" header="상담">
              <template #body>
                <button class="">CRM</button>
              </template>
            </Column>
            <Column field="inflow" header="유입"></Column>
            <Column field="select" header="선택">
              <template #body="slotProps">
                <Checkbox v-model="slotProps.data.select" :binary="true" />
              </template>
            </Column>
            <Column field="etc" header="비고">
              <template #body>
                <button class="">로그인</button>
              </template>
            </Column>
          </DataTable>
        </div>
        <div class="relative flex text-base mt-2">
          <div class="flex items-center mt-3">
            <Checkbox class="ml-4" v-model="allUser" :binary="true" />
            <p class="ml-1">page 전체 회원 선택</p>
          </div>
          <div class="absolute right-0 flex items-center">
            <Checkbox class="ml-4" v-model="reviewDelete" :binary="true" />
            <p class="ml-1">상품평삭제(후기게시판, 코멘트/평점타입후기)</p>
            <Checkbox class="ml-4" v-model="postDelete" :binary="true" />
            <p class="ml-1">게시글삭제(댓글, 1:1문의 포함)</p>
            <Button class="ml-1" icon="pi pi-delete-left" label="삭제" severity="danger" size="small" outlined></Button>
            <Dropdown class="ml-5 text-[10px]" v-model="userType" :options="userTypeList" optionLabel="" placeholder="" />
            <Button class="ml-1" icon="pi pi-arrow-right-arrow-left" label="변경" severity="warning" size="small" outlined></Button>
          </div>
          <div class="absolute right-0 top-12"></div>
        </div>
        <Paginator class="mt-4" :rows="10" :totalRecords="120"></Paginator>
        <div>
          <p class="text-base">회원가입 유입 경로 분석</p>
          <table class="inflow-table w-full mt-1">
            <tbody>
              <tr class="" bgcolor="#FFFFFF" height="26">
                <td class="align-middle" width="5%" rowspan="2" align="center">월</td>
                <td class="align-middle" width="5%" rowspan="2" align="center">가입수</td>
                <td class="align-middle" colspan="8" align="center">매체</td>

                <td class="align-middle" colspan="5" align="center">메이크샵 Special</td>

                <td class="align-middle" colspan="7" align="center">포털</td>

                <td class="align-middle" align="center">기타</td>
                <td class="align-middle" width="5%" rowspan="2" align="center">합계</td>
              </tr>
              <tr bgcolor="#FFFFFF" height="30">
                <td align="center" width="4%" title="네이버 쇼핑박스">
                  <a href="JavaScript:clickprocess('','naver_main.html?type=theme')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_navericon3.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="네이버 쇼핑">
                  <a href="JavaScript:clickprocess('','naver_main.html?type=naverna')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_navericon.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="다음 쇼핑박스">
                  <a href="JavaScript:clickprocess('','shopping_how_shoppinghome.html')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_daumicon1.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="다음 쇼핑하우">
                  <a href="JavaScript:clickprocess('','shopping_how_about.html')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_daumicon.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="네이트 쇼핑박스">
                  <a href="JavaScript:clickprocess('','nate_info.html')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_nateicon.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="KT 모카트리">
                  <img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_edgebook_olleh.png" align="absmiddle" border="0" />
                </td>
                <td align="center" width="4%" title="OK CASHBAG">
                  <img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_edgebook_okcashbag.png" align="absmiddle" border="0" />
                </td>
                <td align="center" width="4%" title="에누리">
                  <img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/enuri_icon.png" align="absmiddle" border="0" />
                </td>
                <td align="center" width="4%" title="모바일샵">
                  <a href="JavaScript:clickprocess('','handy_hosting_about.html')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_mobileicon.new.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="리턴 멤버쉽(RM)">
                  <a href="JavaScript:clickprocess('','rm_intro.html')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/rm_icon.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="엣지북">
                  <a href="JavaScript:clickprocess('','mobile_edge_about.html')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_edgebookicon2.png" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="파워앱">
                  <a href="JavaScript:clickprocess('','powerapp_about.html')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/powerapp_icon_m.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="네이버">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=searchreg')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_navericon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="구글 애드워즈">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=googlead')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_googleicon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="MSN">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=searchreg')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_msnicon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="다음">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=searchreg')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_daumicon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="네이트">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=searchreg')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_nateicon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="줌">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=searchreg')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_zumicon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="스타일닷컴">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=searchreg')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_sta1icon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="페이스북">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=searchreg')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_facebookicon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
                <td align="center" width="4%" title="기타">
                  <a href="JavaScript:clickprocess('','01do_online.html?code=searchreg')" target="topframe"
                    ><img src="https://premium264.makeshop.co.kr/makeshop/newmanager/images/order_etcicon2.gif" align="absmiddle" border="0"
                  /></a>
                </td>
              </tr>
              <tr height="30" bgcolor="#F2F2F2">
                <td class="align-middle" align="center"><a href="JavaScript:monthlog('user','202308')">23.08</a></td>
                <td class="align-middle" align="center">1</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
                <td class="align-middle" align="center">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const selectedGroup = ref();
const selectedmonth = ref();
const selecteddaily = ref();
const selectedSrot = ref();
const selectedPrint = ref();
const birth = ref(false);
const crm = ref("");
const ingredient = ref("");
const gropusUser = ref("");
const searchCondition = ref("");
const selectedSearchMonth1 = ref("");
const selectedSearchDay1 = ref("");
const selectedSearchMonth2 = ref("");
const selectedSearchDay2 = ref("");
const selectedJoinYear1 = ref("");
const selectedJoinMonth1 = ref("");
const selectedJoinDay1 = ref("");
const selectedJoinYear2 = ref("");
const selectedJoinMonth2 = ref("");
const selectedJoinDay2 = ref("");
const selectedJoinType1 = ref("");
const selectedJoinType2 = ref("");
const selectedPeriodSearch = ref("");
const selectedRecommendYear1 = ref("");
const selectedRecommendMonth1 = ref("");
const selectedRecommendDay1 = ref("");
const selectedRecommendYear2 = ref("");
const selectedRecommendMonth2 = ref("");
const selectedRecommendDay2 = ref("");
const selectedRecommender = ref("");
const selectedDormancydYear1 = ref("");
const selectedDormancyMonth1 = ref("");
const selectedDormancyDay1 = ref("");
const selectedDormancyYear2 = ref("");
const selectedDormancyMonth2 = ref("");
const selectedDormancyDay2 = ref("");
const userColor = ref();
const allUser = ref();
const reviewDelete = ref();
const postDelete = ref();
const userType = ref("");

const userTypeList = ref(["최우수고객", "우수고객", "일반고객", "주의고객", "항의고객"]);
const user = ref([
  {
    ip: "1",
    date: "2023/08/22",
    id: "js0526",
    name: "이주상",
    mail: "",
    memo: "",
    addr: "",
    tel: "",
    saved: "10000",
    breakdown: "",
    recommender: "js0526",
    info: "",
    counsel: "",
    confirm: "",
    inflow: "",
    select: true,
    etc: "",
  },
  {
    code: "1",
    name: "2",
    category: "3",
    quantity: "4",
  },
]);
const sortType = ref([
  { name: "나이순" },
  { name: "이름순" },
  { name: "등록일순" },
  { name: "적립금순" },
  { name: "포인트순" },
  { name: "구매건순" },
  { name: "구매금액순" },
]);
const printCount = ref(["15개", "30개", "60개", "90개"]);
const joinType = ref([
  { name: "WEB", code: "WEB" },
  { name: "Mobile", code: "Mobile" },
]);
const joinType2 = ref([
  { name: "일반", code: "normal" },
  { name: "SNS간편", code: "SNS" },
  { name: "다이렉트RM", code: "RM" },
]);
const month = ref([
  { name: "1", code: "1" },
  { name: "2", code: "1" },
  { name: "3", code: "1" },
  { name: "4", code: "1" },
  { name: "5", code: "1" },
  { name: "6", code: "1" },
  { name: "7", code: "1" },
  { name: "8", code: "1" },
  { name: "9", code: "1" },
  { name: "10", code: "1" },
  { name: "11", code: "1" },
  { name: "12", code: "1" },
]);
const daily = ref([
  { name: "1", code: "1" },
  { name: "2", code: "1" },
  { name: "3", code: "1" },
  { name: "4", code: "1" },
  { name: "5", code: "1" },
  { name: "6", code: "1" },
  { name: "7", code: "1" },
  { name: "8", code: "1" },
  { name: "9", code: "1" },
  { name: "10", code: "1" },
  { name: "11", code: "1" },
  { name: "12", code: "1" },
  { name: "13", code: "1" },
  { name: "14", code: "1" },
  { name: "15", code: "1" },
  { name: "16", code: "1" },
  { name: "17", code: "1" },
  { name: "18", code: "1" },
  { name: "19", code: "1" },
  { name: "20", code: "1" },
  { name: "21", code: "1" },
  { name: "22", code: "1" },
  { name: "23", code: "1" },
  { name: "24", code: "1" },
  { name: "25", code: "1" },
  { name: "26", code: "1" },
  { name: "27", code: "1" },
  { name: "28", code: "1" },
  { name: "29", code: "1" },
  { name: "30", code: "1" },
  { name: "31", code: "1" },
]);
</script>
<style scoped>
.inline-block {
  display: inline-block;
}
.wrap {
  position: absolute;
  top: 86px;
  left: 195px;
  width: 1100px;
  padding: 12px;
  font-size: 12px !important;
}
.title-wrap {
  position: relative;
  padding-bottom: 15px;
  color: #000;
  font-size: 24px;
  line-height: 1;
  font-family: "Malgun Gothic";
}
.title-wrap::before,
.title-wrap::after {
  content: "";
  position: absolute;
  width: 100%;
  bottom: 1px;
}
.title-wrap::before {
  left: 0;
  height: 1px;

  background-color: #999; /* 첫 번째 선의 색상 */
}

.title-wrap::after {
  right: 0;
  height: 1px;
  bottom: 0px;
  background-color: #e6e6e6; /* 두 번째 선의 색상 */
}

.title-wrap .tab {
  position: absolute;
  font-size: 12px;
  color: #666;
  letter-spacing: 0;
  top: 0px;
  right: 0px;
}
.title-wrap .title {
  margin-top: 5px;
  font-weight: bold;
}
.title-wrap .title span {
  font-weight: bold;
}
.title-wrap .banner {
  position: absolute;
  top: 0px;
  right: 0px;
}
.inflow-table td {
  border: 1px solid #ddd;
}
</style>
