import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';

import addSidebarMenu from './addSidebarMenu';
import addTopRightMenu from './addTopRightMenu';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';

export default function () {
  extend(SessionDropdown.prototype, 'items', function (items) {
    let moneyLeaderBoardEntryPosition = app.forum.attribute("moneyLeaderBoardEntryPosition");

    if(moneyLeaderBoardEntryPosition==0){
      addSidebarMenu();
    }else if(moneyLeaderBoardEntryPosition==1){
      addTopRightMenu();
    }
  });
}