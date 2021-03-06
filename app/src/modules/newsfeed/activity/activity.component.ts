import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { CacheService } from '../../../common/services/cache/cache.service';
import * as imageSource from "image-source";
import { RouterExtensions } from 'nativescript-angular/router';
import * as appSettings from "application-settings";
import * as applicationModule from "application";

@Component({
  moduleId: module.id,
  selector: 'activity',
  templateUrl: 'activity.component.html',
  styleUrls: ['activity.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  //styleUrls: ['activity.component.css']
})

export class Activity {

  entity;
  android = applicationModule.android;

  constructor(public cache : CacheService){

  }

  @Input('entity') set _entity(entity){

    if(entity.remind_object){
      this.entity = entity.remind_object;
      this.entity.remind_object = false; //stop remind looping, if it even happens
    } else {
      this.entity = entity;
    }
    this.cache.set('channel:' + entity.ownerObj.guid, entity.ownerObj, false);
  }

  onLoaded(){
    console.log('fully loaded');
  }

}
