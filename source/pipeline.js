import { pipeline, env } from '@xenova/transformers';

export class MyClassificationPipeline {
  static task = 'text-classification';
  static model = 'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      // NOTE: Uncomment this to change the cache directory
      // env.cacheDir = './.cache';
      // env.localModelPath = '/path/to/models/';
      // env.allowRemoteModels = false;

      this.instance = pipeline(this.task, this.model, { progress_callback });
    }

    return this.instance;
  }
}