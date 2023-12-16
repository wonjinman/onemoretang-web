/* eslint-disable react/no-unescaped-entities*/
"use client"
import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <div className={'mt-4 p-4 text-sm font-medium leading-[22px]'}>
            <h3 className={'mb-2 text-2xl font-semibold'}>개인정보처리방침</h3>
            <hr className={'text-[rgb(0,0,0,0.85] my-6 mx-0 flex w-full min-w-full text-sm'} />
            <div className={'mb-4'}>
                주식회사 한탕더(이하 "한탕더")은 한탕더 서비스를 제공함에 있어 정보통신망 이용촉진 및
                정보보호 등에 관한 법률, 개인정보보호법, 통신비밀보호법, 전기통신사업법 등
                정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에
                의거한 개인정보처리방침을 정하여 "회원"의 권익 보호에 최선을 다하고 있습니다. "한탕더"은
                "회원"의 개인정보를 보호하고 개인정보와 관련한 "회원"의 고충을 원활하게 처리할 수 있도록
                개인정보처리방침을 제정∙시행하며, "한탕더"이 개인정보처리방침을 개정하는 경우
                어플리케이션의 공지사항(또는 개별공지)을 통하여 공지합니다.
            </div>
            <div>
                <h5 className={'mb-2 text-base font-semibold'}>제1조 개인정보의 수집 및 이용 목적</h5>
                <div>
                    "한탕더"은 "회원"의 동의가 있거나 법령의 규정에 의한 경우를 제외하고는 본 조에서 고지한
                    범위를 넘어 "회원"의 개인정보를 활용하지 않습니다. 수집한 개인정보 활용의 목적은 아래와
                    같습니다.
                </div>
                <ol className={'ml-4 mb-[14px] space-y-1'}>
                    <li>
                        1. 회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량 회원의 부정 이용
                        방지와 비인가 사용 방지, 가입 의사 확인, 가입 및 가입횟수 제한, 추후 법정 대리인
                        본인확인, 분쟁 조정을 위한 기록보존, 연령확인, 불만처리 등 민원 상담 처리, 고지사항 등
                        최신 정보 전달
                    </li>
                    <li>
                        2. 서비스 제공에 관한 계약 이행 및 요금정산: 자동차 대여 예약, 서비스 요금 결제, 콘텐츠
                        제공, 물품 배송 또는 청구서 등 발송, 금융거래 본인 인증 및 금융 서비스, 요금추심 등
                    </li>
                    <li>
                        3. 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 인구 통계학적 특성에 따른
                        서비스 제공 및 광고 게재, 접속 빈도 파악 또는 "회원"의 서비스 이용에 대한 통계
                    </li>
                    <li>4. 사고발생시 원인 규명 및 처리를 위한 수집 및 이용</li>
                </ol>
            </div>
            <div>
                <h5 className={'mb-2 text-base font-semibold'}>제2조 개인정보의 수집 목적 및 항목</h5>
                <ol className={'ml-4 mb-[14px] space-y-2'}>
                    <li>
                        1. 수집하는 개인정보의 항목
                        <ol className={'ml-4 space-y-1'}>
                            <li>가) 회원 서비스 제공 목적 수집 항목 (필수): 성명, 휴대전화번호</li>
                            <li>
                                나) 휴대폰 본인 인증 목적 수집 항목 (필수): 생년월일, 성별, 연계정보(CI),
                                중복가입정보(DI), 통신사
                            </li>
                            또한 "한탕더"은 "한탕더" 서비스 제공을 위해 "회원"의 스마트폰 내부에 부착된 GPS를
                            통해 위치를 기록할 수 있으며, 이 과정에서 "회원"의 이동 경로가 기록될 수 있습니다.
                        </ol>
                    </li>
                    <li>
                        2. 개인정보 수집 방법
                        <ol className={'ml-4 space-y-1'}>
                            <li>가) 모바일 서비스를 통한 회원 가입 및 정보 수정</li>
                            <li>나) 제휴사로부터의 제공</li>
                            <li>다) "회원"의 스마트폰 내 부착된 GPS를 통한 수집</li>
                        </ol>
                    </li>
                </ol>
            </div>
            <div>
                <h5 className={'mb-2 text-base font-semibold'}>제3조 개인정보의 보유 및 이용기간</h5>
                "한탕더"은 "회원"이 회원자격을 유지하고 있는 동안 수집된 "회원"의 개인정보를 보유∙이용할
                수 있으며, "회원"이 탈퇴하거나 자격을 상실할 경우에는 "회원"의 별도 요청이 없더라도 수집된
                회원정보를 삭제 및 파기합니다. 단, "회원"의 탈퇴 또는 자격상실에도 불구하고 다음의 정보에
                대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
                <ol className={'ml-4 mb-[14px] space-y-2'}>
                    <li>
                        1. 관계법령에 의한 정보 보유
                        <ol className={'ml-4 space-y-1'}>
                            <li>
                                가) 전자상거래 등에서의 소비자보호에 관한 법률에 따른 보존 항목 (5년): 계약 또는
                                청약철회 등에 관한 기록
                            </li>
                            <li>
                                나) 전자상거래 등에서의 소비자보호에 관한 법률에 따른 보존 항목 (5년): 대금결제 및
                                재화 등의 공급에 관한 기록
                            </li>
                            <li>
                                다) 전자상거래 등에서의 소비자보호에 관한 법률에 따른 보존 항목 (3년): 소비자의 불만
                                및 분쟁처리에 관한 기록
                            </li>
                            <li>
                                라) 신용정보의 이용 및 보호에 관한 법률에 따른 보존 항목 (3년): 신용정보의 수집∙처리
                                및 이용 등에 관한 기록
                            </li>
                            <li>
                                마) 통신비밀보호법에 따른 보존 항목 (3개월): 웹사이트 방문기록(로그기록, IP등)
                            </li>
                        </ol>
                    </li>
                    <li>
                        2. "한탕더"내부 규정에 의한 정보 보유
                        <ol className={'ml-4 space-y-1'}>
                            <li>가) 재가입 제한 기간 확인 목적 보존 항목 (1년): 성명, 휴대전화번호, DI</li>
                        </ol>
                    </li>
                </ol>
            </div>
            <div>
                <h5 className={'mb-2 text-base font-semibold'}>제 4조 개인정보의 보유 및 이용기간</h5>
                `“한탕더”는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이
                파기합니다. 다만, 관계법령에 따라 개인정보를 보존하여야 하는 경우에는 해당 기간 경과 후 지체
                없이 재생 불가능한 방법으로 파기하며, "한탕더"의 개인정보 파기절차 및 방법은 다음과
                같습니다.
                <ol className={'ml-4 mb-[14px] space-y-1'}>
                    <li>
                        1. 개인정보 파기절차
                        <li>
                            "회원"이 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류함) 내부
                            규정 및 기타 관련 법령에 따라 일정기간 저장되거나 즉시 파기됩니다. 이 때, DB로 옮겨진
                            개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
                        </li>
                    </li>
                    <li>
                        2. 개인정보 파기기한
                        <li>
                            개인정보의 보유기간이 경과한 경우에는 그 경과한 날로부터, 개인정보의 처리 목적 달성,
                            해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 된 경우에는 개인정보의
                            처리가 불필요한 것으로 인정되는 날로부터 각 지체 없이(정당한 사유가 없는 한 5일 이내)
                            해당 개인정보를 파기합니다.
                        </li>
                    </li>
                    <li>
                        3. 개인정보 파기방법
                        <li>
                            전자적 파일 형태의 정보는 로우레벨포맷, 와이핑 방법 등 복구 및 재생이 되지 않는
                            기술적인 방법을 사용합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
                            파기합니다.
                        </li>
                    </li>
                </ol>
            </div>
            <div>
                <h5 className={'mb-2 text-base font-semibold'}>
                    제 5조 이용자 및 법정대리인의 권리와 행사 방법
                </h5>
                <ul className={'ml-4 mb-[14px] space-y-1'}>
                    <li>
                        1. "회원"은 언제든지 등록되어 있는 "회원"의 개인정보를 열람하거나 수정할 수 있으며,
                        "한탕더"의 개인정보의 처리에 동의하지 않는 경우 동의를 거부하거나 가입해지(회원탈퇴)를
                        요청할 수 있습니다.
                    </li>
                    <li>
                        2. "회원"이 개인정보의 오류에 대한 정정을 요청한 경우, "한탕더"은 정정을 완료하기
                        전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게
                        이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록
                        하겠습니다.
                    </li>
                    <li>
                        3. "한탕더"은 "회원"의 요청에 의해 해지 또는 삭제된 개인정보는 제3조에 명시된 바에
                        따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                    </li>
                </ul>
            </div>
            <div>
                <h5 className={'mb-2 text-base font-semibold'}>제 6조 개인정보의 안정성 확보 조치</h5>
                “한탕더”는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적·관리적 및
                물리적 조치를 하고 있습니다.
                <ul className={'ml-4 mb-[14px] space-y-1'}>
                    <li>
                        1. 개인정보 취급 관련 안정성 확보를 위해 정기적으로 자체 감사를 실시하고 있습니다.
                    </li>
                    <li>
                        2. 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는
                        대책을 시행하고 있습니다.
                    </li>
                    <li>3. 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</li>
                    <li>
                        {' '}
                        4. "한탕더"은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여
                        보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에
                        시스템을 설치하고 기술적 · 물리적으로 감시 및 차단하고 있습니다.
                    </li>
                    <li>
                        {' '}
                        5. 개인정보의 암호화 "회원"의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
                        본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금
                        기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
                    </li>
                    <li>
                        6. 개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이
                        위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.
                    </li>
                    <li>
                        {' '}
                        7. 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여
                        개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여
                        외부로부터의 무단 접근을 통제하고 있습니다.
                    </li>
                    <li>
                        8. 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고
                        있습니다.
                    </li>{' '}
                    <li>
                        9. 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를
                        수립, 운영하고 있습니다.
                    </li>
                </ul>
            </div>
            <div>
                <h5 className={'mb-2 text-base font-semibold'}>
                    제 7조 개인정보보호 업무 관련 담당부서 및 개인정보 관리책임자
                </h5>
                "한탕더"은 "회원"의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와
                같이 관련 부서 및 개인정보 관리책임자를 지정하고 있습니다.
                <ul className={'ml-4 mb-[14px]'}>
                    <li>1. 이름: 이원진 </li>
                    <li>2. 직위: 제품리드 </li>
                    <li>3. 메일: dlrkqehf12@naver.com </li>
                </ul>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
