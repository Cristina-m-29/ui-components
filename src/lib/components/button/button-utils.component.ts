import { Injectable } from "@angular/core";
import { McIconSize } from "../icon/icon.component.types";
import { McButtonColor, McButtonSize, McButtonType } from "./button.component.types";

@Injectable({
    providedIn: null,
})
export class McButtonUtils {
    public getIconSize(size: McButtonSize): McIconSize {
        switch (size) {
            case 'extra-large' || 'extra-large-square': {
              return 'extra-large';
            }
            case 'large' || 'large-square': {
              return 'large';
            }
            case 'medium' || 'medium-square': {
              return 'medium';
            }
            case 'small' || 'small-square': {
              return 'small';
            }
            default: {
              return 'medium';
            }
          }
    }

    public getIconSizeInPixels(size: McButtonSize): number {
        switch (size) {
            case 'extra-large' || 'extra-large-square': {
              return 21;
            }
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

    public getColorForIcon(disabled: boolean, color: McButtonColor, type: McButtonType): string {
        if (disabled) {
            return '#8F90A6';
        }
        else {
            switch (color) {
              case 'basic': {
                  switch (type) {
                  case 'primary': 
                      return '#FFFFFF';
                  default:
                      return '#1C1C28';
                  }
              }
              case 'danger': {
                switch (type) {
                  case 'primary': 
                    return '#FFFFFF';
                  default:
                    return '#FF3B3B';
                }
              }
              case 'warning': {
                switch (type) {
                  case 'primary': 
                    return '#FFFFFF';
                  default:
                    return '#FF8800';
                }
              }
              case 'success': {
                switch (type) {
                  case 'primary': 
                    return '#FFFFFF';
                  default:
                    return '#06C270';
                }
              }
              default: {
                  switch (type) {
                    case 'primary': 
                        return '#FFFFFF';
                    default:
                        return '#6244D9';
                  }
              }
          }
        }
    }
}