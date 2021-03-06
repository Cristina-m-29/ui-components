import { Component } from '@angular/core';
import { McUIIcon } from 'dist/components/icon/icon.component.types';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {

  public icons = [
    "search", "zoom-in", "zoom-out", "folder", "wallet", "credit-card", "receipt", "coins", "document", "document-2", "document-add", "document-delete",
    "bookmark", "copy", "graph", "chart", "layers", "color-palette", "paperclip", "calendar", "box-2", "box-1", "lock", "lock-open", "lock-check", "lock-x",
    "key", "filter", "time-circle", "time-square", "timer", "alarm-clock", "no-sound-microphone", "microphone", "volume-down", "volume-up","volume-off-2", "volume-off-1",
    "music", "headphones", "video", "camera", "info-square", "info-circle", "heartbeat", "plus", "minus", "close", "check", "more-square", "more-circle", "stop", "danger",
    "browser", "screen", "chart", "category", "category-2", "mail", "message-circle","message-square", "home", "heart", "bell", "send", "scanner", "location",
    "bag-1", "bag-2", "bag-3", "image", "compas", "sale", "coupon-2", "coupon-3", "coupon-1", "cart", "case", "trash-can", "lightning", "star", "rocket",
    "settings","gift", "cloud-download", "cloud-upload", "cloud", "login", "logout", "download", "shield-3", "shield-2", "shield-1", "eye", "hide", "save",
    "play", "pause", "burger", "toggle-left", "toggle-right", "oldschool-gamepad", "gamepad", "fire", "user", "users","add-user", "laptop", "iphone", "mouse",
    "call", "calling", "call-missed", "call-silent", "edit", "edit-2", "share", "link",  "link-2", "loading", "scale", "music-plate", "basketball",
    "book", "coffee", "figma", "flag", "down-square-small", "up-square-small", "right-square-small", "left-square-small", "down-square",
    "up-square", "right-square", "left-square", "down-circle-small", "up-circle-small", "right-circle", "left-circle", "down-circle", "up-circle",
    "up-left-circle","down-right-circle", "down-left-circle", "down", "up", "right", "left", "up-left", "down-left", "up-right", "down-right", "up-small","down-small",
    "right-small", "left-small", "swap", "swap-across", "swap-circle", "expand", "collapse", "right-circle-small", "left-circle-small", "calculator", "up-right-circle",
    "logout-vertical", "filter-panning", "chart-lines"
  ]

  public getIcon(icon: string): McUIIcon {
    return icon as McUIIcon;
  }

}
