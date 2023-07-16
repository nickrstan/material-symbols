/**
 * Simple webcomponent
 * allowing the use of
 * the material design
 * icons font from google
 *
 * @author jordan.daigle
 * @date 2019-07-20
 */
import { MaterialDesignIcon } from "./md-icon";

export class MaterialDesignIconOutlined extends MaterialDesignIcon {
  constructor() {
    super(
      "Outlined"
    );
  }
  /**
   * Initializing
   * tone
   */
  initializeTone() {
    this.tone =
      "outlined";
    if (
      this.hasAttribute(
        "round"
      )
    ) {
      this.tone =
        "round";
    } else if (
      this.hasAttribute(
        "sharp"
      )
    ) {
      this.tone =
        "sharp";
    } else if (
      this.hasAttribute(
        "filled"
      )
    ) {
      this.tone =
        "filled";
    } else if (
      this.hasAttribute(
        "two-tone"
      )
    ) {
      this.tone =
        "two-tone";
    }
  }
}
