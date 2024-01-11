import { Chunk, StorageAdapter, StorageKey } from '@automerge/automerge-repo';

export class OPFSStorageAdapter extends StorageAdapter {
  private baseDirectory: string

  load(key: StorageKey): Promise<Uint8Array | undefined> {
    throw new Error('Method not implemented.');
  }
  save(key: StorageKey, data: Uint8Array): Promise<void> {
    throw new Error('Method not implemented.');
  }
  remove(key: StorageKey): Promise<void> {
    throw new Error('Method not implemented.');
  }
  loadRange(keyPrefix: StorageKey): Promise<Chunk[]> {
    throw new Error('Method not implemented.');
  }
  removeRange(keyPrefix: StorageKey): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
