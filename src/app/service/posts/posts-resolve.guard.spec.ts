import { TestBed, async, inject } from '@angular/core/testing';

import { PostsResolveGuard } from './posts-resolve.guard';

describe('PostsResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsResolveGuard]
    });
  });

  it('should ...', inject([PostsResolveGuard], (guard: PostsResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
