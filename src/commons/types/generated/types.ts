export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  address: Scalars['String'];
  bail: Scalars['Int'];
  boardImage: IBoardImage;
  categories: Array<ICategory>;
  closedAt: Scalars['DateTime'];
  context: Scalars['String'];
  countLike: Scalars['Int'];
  countMember: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  endAt: Scalars['DateTime'];
  frequency: Scalars['Int'];
  id: Scalars['String'];
  isSuccess: Scalars['Boolean'];
  keywords: Array<IKeyword>;
  leader: Scalars['String'];
  leaderNickname: Scalars['String'];
  projectUrl: Scalars['String'];
  startAt: Scalars['DateTime'];
  status: Scalars['Boolean'];
  tags: Array<ITag>;
  title: Scalars['String'];
  totalMember: Scalars['Int'];
};

export type IBoardImage = {
  __typename?: 'BoardImage';
  id: Scalars['String'];
  url: Scalars['String'];
};

export type ICategory = {
  __typename?: 'Category';
  boards: Array<IBoard>;
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<IUser>;
};

export type IChatMessage = {
  __typename?: 'ChatMessage';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  room: Scalars['String'];
  user: IUser;
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  id: Scalars['String'];
  room: Scalars['String'];
  user: IUser;
};

export type IComment = {
  __typename?: 'Comment';
  board: IBoard;
  comment: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
};

export type ICreateBoardImageInput = {
  url?: InputMaybe<Scalars['String']>;
};

export type ICreateBoardInput = {
  address: Scalars['String'];
  bail: Scalars['Int'];
  boardImage?: InputMaybe<ICreateBoardImageInput>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  closedAt: Scalars['DateTime'];
  context: Scalars['String'];
  description: Scalars['String'];
  endAt: Scalars['DateTime'];
  frequency: Scalars['Int'];
  isSuccess?: InputMaybe<Scalars['Boolean']>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  projectUrl?: InputMaybe<Scalars['String']>;
  startAt: Scalars['DateTime'];
  status?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  totalMember: Scalars['Int'];
};

export type ICreateCategoryInput = {
  name: Scalars['String'];
};

export type ICreateCommentInput = {
  boardId: Scalars['String'];
  comment: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateKeywordInput = {
  boards: Array<Scalars['String']>;
  name: Scalars['String'];
  users: Array<Scalars['String']>;
};

export type ICreateLikeInput = {
  boardId: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateSubCommentInput = {
  commentId: Scalars['String'];
  subComment: Scalars['String'];
  userId: Scalars['String'];
};

export type ICreateTagImageInput = {
  url: Scalars['String'];
};

export type ICreateTagInput = {
  boards: Array<Scalars['String']>;
  name: Scalars['String'];
  tagImage?: InputMaybe<ICreateTagImageInput>;
  users: Array<Scalars['String']>;
};

export type ICreateUserBoardInput = {
  boardId: Scalars['String'];
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['String'];
};

export type ICreateUserImageInput = {
  url?: InputMaybe<Scalars['String']>;
};

export type ICreateUserInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type ICreateUserUrlInput = {
  user: Scalars['String'];
};

export type IKeyword = {
  __typename?: 'Keyword';
  boards: Array<IBoard>;
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<IUser>;
};

export type ILike = {
  __typename?: 'Like';
  board: IBoard;
  id: Scalars['String'];
  user: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  createCancel: IPayment;
  createCategory: ICategory;
  createComment: IComment;
  createEmailTokenForPassword: Scalars['Boolean'];
  createKeyword: IKeyword;
  createOrDeleteLike: Scalars['String'];
  createPayment: IPayment;
  createRoom: IChatRoom;
  createSubComment: ISubComment;
  createTag: ITag;
  createUser: IUser;
  createUserBoard: IUserBoard;
  createUserUrl: IUserUrl;
  login: Scalars['String'];
  logout: Scalars['String'];
  removeBoard: Scalars['Boolean'];
  removeBoardImage: Scalars['Boolean'];
  removeCategory: Scalars['Boolean'];
  removeComment: Array<Scalars['String']>;
  removeImage: Scalars['Boolean'];
  removeKeyword: IKeyword;
  removeLoginUser: Scalars['Boolean'];
  removeSubComment: Array<Scalars['String']>;
  removeTag: ITag;
  removeTagImage: Scalars['Boolean'];
  removeUser: Scalars['Boolean'];
  removeUserBoards: Array<Scalars['String']>;
  removeUserUrl: IUserUrl;
  restoreAccessToken: Scalars['String'];
  restoreCategory: ICategory;
  restoreTag: ITag;
  restoreUser: Scalars['Boolean'];
  sendEmailToken: Scalars['String'];
  updateBoard: IBoard;
  updateBoardImage: IBoardImage;
  updateCategory: ICategory;
  updateComment: Scalars['String'];
  updateKeyword: IKeyword;
  updatePassword: Scalars['Boolean'];
  updateSubComment: Scalars['String'];
  updateTag: ITag;
  updateTagImage: ITagImage;
  updateUser: IUser;
  updateUserBoard: IUserBoard;
  updateUserImage: IUserImage;
  updateUserUrl: IUserUrl;
  uploadBoardImage: IBoardImage;
  uploadFiles: Array<Scalars['String']>;
  uploadTagImage: ITagImage;
  uploadUserImage: IUserImage;
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCancelArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  user: Scalars['String'];
};


export type IMutationCreateCategoryArgs = {
  createCategoryInput: ICreateCategoryInput;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateEmailTokenForPasswordArgs = {
  email: Scalars['String'];
};


export type IMutationCreateKeywordArgs = {
  createKeywordInput: ICreateKeywordInput;
};


export type IMutationCreateOrDeleteLikeArgs = {
  createLikeInput: ICreateLikeInput;
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateRoomArgs = {
  nickname: Scalars['String'];
};


export type IMutationCreateSubCommentArgs = {
  createSubCommentInput: ICreateSubCommentInput;
};


export type IMutationCreateTagArgs = {
  createTagInput: ICreateTagInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
  emailToken: Scalars['String'];
};


export type IMutationCreateUserBoardArgs = {
  createUserBoardInput: ICreateUserBoardInput;
};


export type IMutationCreateUserUrlArgs = {
  createUserUrlInput: ICreateUserUrlInput;
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRemoveBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationRemoveBoardImageArgs = {
  boardImageId: Scalars['String'];
};


export type IMutationRemoveCategoryArgs = {
  id: Scalars['String'];
};


export type IMutationRemoveCommentArgs = {
  boardId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IMutationRemoveImageArgs = {
  userImageId: Scalars['String'];
};


export type IMutationRemoveKeywordArgs = {
  id: Scalars['String'];
};


export type IMutationRemoveSubCommentArgs = {
  commentId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IMutationRemoveTagArgs = {
  id: Scalars['String'];
};


export type IMutationRemoveTagImageArgs = {
  tagImageId: Scalars['String'];
};


export type IMutationRemoveUserArgs = {
  email: Scalars['String'];
};


export type IMutationRemoveUserBoardsArgs = {
  boardId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IMutationRemoveUserUrlArgs = {
  id: Scalars['String'];
};


export type IMutationRestoreCategoryArgs = {
  id: Scalars['String'];
};


export type IMutationRestoreTagArgs = {
  id: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  email: Scalars['String'];
};


export type IMutationSendEmailTokenArgs = {
  email: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBoardImageArgs = {
  boardImageId: Scalars['String'];
  image: Array<Scalars['Upload']>;
};


export type IMutationUpdateCategoryArgs = {
  updateCategoryInput: IUpdateCategoryInput;
};


export type IMutationUpdateCommentArgs = {
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdateKeywordArgs = {
  updateKeywordInput: IUpdateKeywordInput;
};


export type IMutationUpdatePasswordArgs = {
  email: Scalars['String'];
  emailToken: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateSubCommentArgs = {
  updateSubCommentInput: IUpdateSubCommentInput;
};


export type IMutationUpdateTagArgs = {
  updateTagInput: IUpdateTagInput;
};


export type IMutationUpdateTagImageArgs = {
  image: Array<Scalars['Upload']>;
  tagImageId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserBoardArgs = {
  updateUserBoardInput: IUpdateUserBoardInput;
};


export type IMutationUpdateUserImageArgs = {
  image: Array<Scalars['Upload']>;
  userImageId: Scalars['String'];
};


export type IMutationUpdateUserUrlArgs = {
  updateUserUrlInput: IUpdateUserUrlInput;
  userId: Scalars['String'];
};


export type IMutationUploadBoardImageArgs = {
  images: Array<Scalars['Upload']>;
};


export type IMutationUploadFilesArgs = {
  file: Array<Scalars['Upload']>;
};


export type IMutationUploadTagImageArgs = {
  image: Array<Scalars['Upload']>;
};


export type IMutationUploadUserImageArgs = {
  image: Array<Scalars['Upload']>;
};

export enum IPayment_Transaction_Status_Enum {
  Cancelled = 'CANCELLED',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPayment_Transaction_Status_Enum;
  user: Array<IUser>;
};

export type IQuery = {
  __typename?: 'Query';
  checkGps: Scalars['Boolean'];
  connectionRoom: IChatRoom;
  fetchBoard: IBoard;
  fetchBoardImage: IBoardImage;
  fetchBoardImages: Array<IBoardImage>;
  fetchBoards: Array<IBoard>;
  fetchBoardsByLikes: Array<IBoard>;
  fetchCategories: Array<ICategory>;
  fetchCategory: ICategory;
  fetchComments: Array<IComment>;
  fetchKeyword: IKeyword;
  fetchKeywords: Array<IKeyword>;
  fetchLikes: Array<ILike>;
  fetchLoginedUser: IUser;
  fetchLogs: Array<IChatMessage>;
  fetchSubComments: Array<ISubComment>;
  fetchTag: ITag;
  fetchTagImage: ITagImage;
  fetchTagImages: Array<ITagImage>;
  fetchTags: Array<ITag>;
  fetchUserBoards: Array<IUserBoard>;
  fetchUserImage: IUserImage;
  fetchUserImages: Array<IUserImage>;
  fetchUserRandom: IUser;
  fetchUserWithEmail: IUser;
  fetchUserWithUserId: IUser;
  fetchUsers: Array<IUser>;
  findAll: Array<IUserUrl>;
  findOne: IUserUrl;
  getAttendanceCount: Scalars['Float'];
  getAttendanceTime: Scalars['String'];
};


export type IQueryCheckGpsArgs = {
  boardId: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type IQueryConnectionRoomArgs = {
  hostNickname: Scalars['String'];
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardImageArgs = {
  boardImageId: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  isSuccess?: InputMaybe<Scalars['Boolean']>;
  keywordName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Boolean']>;
  tagName?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBoardsByLikesArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  isSuccess?: InputMaybe<Scalars['Boolean']>;
  keywordName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Boolean']>;
  tagName?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchCategoryArgs = {
  id: Scalars['String'];
};


export type IQueryFetchCommentsArgs = {
  boardId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchKeywordArgs = {
  id: Scalars['String'];
};


export type IQueryFetchLikesArgs = {
  boardId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchLogsArgs = {
  room: Scalars['String'];
};


export type IQueryFetchSubCommentsArgs = {
  commentId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchTagArgs = {
  id: Scalars['String'];
};


export type IQueryFetchTagImageArgs = {
  tagImageId: Scalars['String'];
};


export type IQueryFetchUserBoardsArgs = {
  boardId?: InputMaybe<Scalars['String']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchUserImageArgs = {
  userImageId: Scalars['String'];
};


export type IQueryFetchUserWithEmailArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUserWithUserIdArgs = {
  userId: Scalars['String'];
};


export type IQueryFindOneArgs = {
  id: Scalars['String'];
};


export type IQueryGetAttendanceCountArgs = {
  boardId: Scalars['String'];
};


export type IQueryGetAttendanceTimeArgs = {
  boardId: Scalars['String'];
};

export type ISubComment = {
  __typename?: 'SubComment';
  comment: IComment;
  id: Scalars['String'];
  subComment: Scalars['String'];
  user: IUser;
};

export type ITag = {
  __typename?: 'Tag';
  boards: Array<IBoard>;
  id: Scalars['String'];
  name: Scalars['String'];
  tagImage: ITagImage;
  users: Array<IUser>;
};

export type ITagImage = {
  __typename?: 'TagImage';
  id: Scalars['String'];
  url: Scalars['String'];
};

export type IUpdateBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  bail?: InputMaybe<Scalars['Int']>;
  boardImage?: InputMaybe<ICreateBoardImageInput>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  closedAt?: InputMaybe<Scalars['DateTime']>;
  context?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endAt?: InputMaybe<Scalars['DateTime']>;
  frequency?: InputMaybe<Scalars['Int']>;
  isSuccess?: InputMaybe<Scalars['Boolean']>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  projectUrl?: InputMaybe<Scalars['String']>;
  startAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  totalMember?: InputMaybe<Scalars['Int']>;
};

export type IUpdateCategoryInput = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type IUpdateCommentInput = {
  boardId?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IUpdateKeywordInput = {
  boards?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdateSubCommentInput = {
  commentId?: InputMaybe<Scalars['String']>;
  subComment?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IUpdateTagInput = {
  boards?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  tagImage?: InputMaybe<ICreateTagImageInput>;
  users?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdateUserBoardInput = {
  boardId?: InputMaybe<Scalars['String']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  email?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  point?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  userImage?: InputMaybe<ICreateUserImageInput>;
};

export type IUpdateUserUrlInput = {
  user?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  categories: Array<ICategory>;
  email: Scalars['String'];
  id: Scalars['String'];
  keywords: Array<IKeyword>;
  nickname: Scalars['String'];
  point: Scalars['Int'];
  tags: Array<ITag>;
  userImage: IUserImage;
};

export type IUserBoard = {
  __typename?: 'UserBoard';
  board: IBoard;
  id: Scalars['String'];
  isAccepted: Scalars['Boolean'];
  user: IUser;
};

export type IUserImage = {
  __typename?: 'UserImage';
  id: Scalars['String'];
  url: Scalars['String'];
};

export type IUserUrl = {
  __typename?: 'UserUrl';
  id: Scalars['String'];
  user: IUser;
};
