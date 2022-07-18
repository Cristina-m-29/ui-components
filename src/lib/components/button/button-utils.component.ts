import { Injectable } from "@angular/core";
import { McIconSize } from "../icon/icon.component.types";
import { McButtonColor, McButtonSize, McButtonType } from "./button.component.types";
@Injectable({
    providedIn: null,
})
export class McButtonUtils {
  public getBaseSize(size: McButtonSize): McIconSize {
    if (['large', 'large-round', 'large-square', 'large-square-round'].includes(size)) {
      return 'large';
    }
    if(['medium', 'medium-round', 'medium-square', 'medium-square-round'].includes(size)) {
      return 'medium';
    }
    if(['small', 'small-round', 'small-square', 'small-square-round'].includes(size)) {
      return 'small';
    }
    return 'medium';
  }

  public getIconSizeInPixels(size: McButtonSize): number {
    switch (size) {
        case 'large' || 'large-square': {
          return 18;
        }
        case 'medium' || 'medium-square': {
          return 15;
        }
        case 'small' || 'small-square': {
          return 13;
        }
        default: {
          return 15;
        }
    }
  }

  public getColor(disabled: boolean, color: McButtonColor, type: McButtonType): string {
    if (disabled) {
      return '#8F90A6'; // $mc-dark-3
    }
    else {
      if (type === 'primary') {
        return '#FFFFFF'; // $mc-light-4
      }
      else {
        switch (color) {
          case 'basic': {
            return '#1C1C28'; // $mc-dark-0
          }
          case 'danger': {
            return '#FF3B3B'; // $mc-red-1
          }
          case 'warning': {
            return '#FF8800'; // $mc-orange-1
          }
          case 'success': {
            return '#06C270'; // $mc-green-1
          }
          default: {
            return '#6244D9'; // $mc-primary-main
          }
        }
      }
    }
  }
}