import React from 'react';
import {
  Calendar,
  OverallAnalysis,
  AnalysisSection,
  BottomNavigation,
  DateSelector,
} from './index';

const FrameAkka: React.FC = () => {
  // 캘린더 데이터
  const calendarDates = [
    { day: 'Tue', date: 8, isSelected: false },
    { day: 'Tue', date: 9, isSelected: false },
    { day: 'Tue', date: 10, isSelected: false },
    { day: 'Wed', date: 11, isSelected: true },
    { day: 'Thu', date: 12, isSelected: false },
    { day: 'Thu', date: 13, isSelected: false },
    { day: 'Thu', date: 14, isSelected: false },
  ];

  // 드리블 분석 차트 데이터
  const dribbleCharts = [
    { percentage: 75, label: '턴오버 비율' },
    { percentage: 45, label: '돌파 성공률' },
    { percentage: 65, label: '어시스트 비율' },
  ];

  // 하단 네비게이션 아이템
  const navItems = [
    {
      id: 'home',
      icon: (
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <img
            alt="home"
            className="block max-w-none size-full"
            src="http://localhost:3845/assets/278659f6c3f6c43ad66006c340c902726fa8f61b.svg"
          />
        </div>
      ),
      isActive: true,
      onClick: () => console.log('Home clicked'),
    },
    {
      id: 'video',
      icon: (
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <img
            alt="video"
            className="block max-w-none size-full"
            src="http://localhost:3845/assets/17161147608b75c7bdeb2c0f8617dd885bd2accc.svg"
          />
        </div>
      ),
      isActive: false,
      onClick: () => console.log('Video clicked'),
    },
    {
      id: 'basketball',
      icon: (
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <img
            alt="basketball"
            className="block max-w-none size-full"
            src="http://localhost:3845/assets/598318de53bc10931e858389540c84f2abadca2c.svg"
          />
        </div>
      ),
      isActive: false,
      onClick: () => console.log('Basketball clicked'),
    },
    {
      id: 'settings',
      icon: (
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <img
            alt="settings"
            className="block max-w-none size-full"
            src="http://localhost:3845/assets/cfca58089a0af76730012efe237f191ad2b67f16.svg"
          />
        </div>
      ),
      isActive: false,
      onClick: () => console.log('Settings clicked'),
    },
  ];

  return (
    <div className="bg-[#151515] relative size-full" data-name="Frame akka">
      {/* Top Bar */}
      <div className="absolute contents left-0 top-0">
        <div className="absolute contents left-0 top-0" data-name="Top Bar">
          <div className="absolute bg-[#151515] h-[24px] left-0 overflow-clip right-0 top-0" data-name="android / system-bar">
            <div className="absolute bg-[#151515] h-[24px] left-0 right-0 top-0" />
            <div className="absolute contents right-[8px] top-[7px]">
              {/* 시스템 바 아이콘들 */}
            </div>
          </div>
          <div className="absolute contents left-0 top-[24px]" data-name="app bar">
            <div className="absolute bg-[#151515] h-[56px] left-0 top-[24px] w-[360px]" data-name="Top" />
          </div>
        </div>
        <div className="absolute h-[30px] left-[calc(50%-0.5px)] top-[37px] translate-x-[-50%] w-[61px]" data-name="_레이어_1">
          <img
            alt="logo"
            className="block max-w-none size-full"
            src="http://localhost:3845/assets/5f11953985700cc1f5c4fca46bda32b1c5d980ac.svg"
          />
        </div>
      </div>

      {/* Date Selectors */}
      <div className="absolute bottom-[72.03%] content-stretch flex gap-[10px] items-center left-[4.63%] right-[48.38%] top-0">
        <DateSelector value="2025" onClick={() => console.log('Year clicked')} />
        <DateSelector value="October" onClick={() => console.log('Month clicked')} />
      </div>

      {/* Calendar */}
      <div className="absolute bottom-0 content-stretch flex items-center left-0 right-0 top-[41.96%]">
        <Calendar dates={calendarDates} />
      </div>

      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-[50px] items-start left-[20px] top-[293px] w-[321px]">
        <OverallAnalysis actionPercentage={75} gamePercentage={25} />
        
        <AnalysisSection
          title="드리블 분석"
          charts={dribbleCharts}
          defaultExpanded={true}
        />
        
        <AnalysisSection
          title="리바운드 분석"
          charts={[]}
          defaultExpanded={false}
        />
        
        <AnalysisSection
          title="슛 분석"
          charts={[]}
          defaultExpanded={false}
        />
      </div>

      {/* Bottom Navigation */}
      <div className="absolute content-stretch flex items-center left-0 top-[1046px]">
        <BottomNavigation items={navItems} />
      </div>
    </div>
  );
};

export default FrameAkka;







