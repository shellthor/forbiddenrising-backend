export interface CharacterUpdateResult {
  total: number;
  processed: number;
  added?: number;
  success: number;
  deleted: number;
  ignored: number;
  failed: number;
}
