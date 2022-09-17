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

export type ICreatePointHistoryInput = {
  amount: Scalars['Int'];
  pointHistory: Scalars['String'];
};

export type ICreateSubCommentInput = {
  commentId: Scalars['String'];
  subComment: Scalars['String'];
};

export type ICreateTagInput = {
  boards: Array<Scalars['String']>;
  name: Scalars['String'];
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
  userImage?: InputMaybe<ICreateUserImageInput>;
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
  checkEmailDuplicate: Scalars['Boolean'];
  checkEmailToken: Scalars['String'];
  createBoard: IBoard;
  createCancel: IPayment;
  createCategory: ICategory;
  createComment: IComment;
  createKeyword: IKeyword;
  createOrDeleteLike: Scalars['String'];
  createPayment: IPayment;
  createPointHistory: IPointHistory;
  createRoom: IChatRoom;
  createSubComment: ISubComment;
  createTag: ITag;
  createUser: IUser;
  createUserBoard: IUserBoard;
  createUserUrl: IUserUrl;
  delete: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  onClickBoard: Scalars['Boolean'];
  removeBoard: Scalars['Boolean'];
  removeCategory: Scalars['Boolean'];
  removeComment: Array<Scalars['String']>;
  removeKeyword: IKeyword;
  removePointHistory: Scalars['Boolean'];
  removeSubComment: Array<Scalars['String']>;
  removeTag: ITag;
  removeUser: Scalars['Boolean'];
  removeUserBoards: Array<Scalars['String']>;
  removeUserUrl: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  restoreCategory: ICategory;
  restoreTag: ITag;
  restoreUser: Scalars['Boolean'];
  sendEmailToken: Scalars['String'];
  sendNewPassword: Scalars['String'];
  sendPasswordEmailToken: Scalars['Boolean'];
  sendSignupEmailToken: Scalars['String'];
  temp: Scalars['Boolean'];
  updateBoard: IBoard;
  updateCategory: ICategory;
  updateComment: Scalars['String'];
  updateKeyword: IKeyword;
  updatePassword: Scalars['Boolean'];
  updatePointHistory: IPointHistory;
  updateSubComment: Scalars['String'];
  updateTag: ITag;
  updateUser: IUser;
  updateUserBoard: IUserBoard;
  updateUserUrl: IUserUrl;
  uploadBoardImage: Scalars['String'];
  uploadUserImage: Scalars['String'];
  uploadZipFile: Scalars['String'];
};


export type IMutationCheckEmailDuplicateArgs = {
  email: Scalars['String'];
};


export type IMutationCheckEmailTokenArgs = {
  email: Scalars['String'];
  emailToken: Scalars['String'];
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


export type IMutationCreatePointHistoryArgs = {
  createPointHistoryInput: ICreatePointHistoryInput;
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
};


export type IMutationCreateUserBoardArgs = {
  createUserBoardInput: ICreateUserBoardInput;
};


export type IMutationCreateUserUrlArgs = {
  userUrl: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationOnClickBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationRemoveBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationRemoveCategoryArgs = {
  id: Scalars['String'];
};


export type IMutationRemoveCommentArgs = {
  commentId?: InputMaybe<Scalars['String']>;
};


export type IMutationRemoveKeywordArgs = {
  id: Scalars['String'];
};


export type IMutationRemovePointHistoryArgs = {
  pointHistoryId: Scalars['String'];
};


export type IMutationRemoveSubCommentArgs = {
  commentId?: InputMaybe<Scalars['String']>;
  subCommentId?: InputMaybe<Scalars['String']>;
};


export type IMutationRemoveTagArgs = {
  id: Scalars['String'];
};


export type IMutationRemoveUserBoardsArgs = {
  boardId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IMutationRemoveUserUrlArgs = {
  userUrlId: Scalars['String'];
};


export type IMutationRestoreCategoryArgs = {
  id: Scalars['String'];
};


export type IMutationRestoreTagArgs = {
  id: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  userId: Scalars['String'];
};


export type IMutationSendEmailTokenArgs = {
  email: Scalars['String'];
};


export type IMutationSendNewPasswordArgs = {
  email: Scalars['String'];
};


export type IMutationSendSignupEmailTokenArgs = {
  email: Scalars['String'];
};


export type IMutationTempArgs = {
  categoryName: Scalars['String'];
  tagName: Array<Scalars['String']>;
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
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
  password: Scalars['String'];
};


export type IMutationUpdatePointHistoryArgs = {
  pointHistoryId: Scalars['String'];
  updatePointHistoryInput: IUpdatePointHistoryInput;
};


export type IMutationUpdateSubCommentArgs = {
  updateSubCommentInput: IUpdateSubCommentInput;
};


export type IMutationUpdateTagArgs = {
  updateTagInput: IUpdateTagInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserBoardArgs = {
  updateUserBoardInput: IUpdateUserBoardInput;
};


export type IMutationUpdateUserUrlArgs = {
  userUrl: Scalars['String'];
  userUrlId: Scalars['String'];
};


export type IMutationUploadBoardImageArgs = {
  image: Array<Scalars['Upload']>;
};


export type IMutationUploadUserImageArgs = {
  image: Array<Scalars['Upload']>;
};


export type IMutationUploadZipFileArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
  zip: Array<Scalars['Upload']>;
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
  user: IUser;
};

export type IPointHistory = {
  __typename?: 'PointHistory';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  pointHistory: Scalars['String'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  checkGps: Scalars['Boolean'];
  connectionRoom: IChatRoom;
  fetchBoard: IBoard;
  fetchBoardImage: IBoardImage;
  fetchBoardImages: Array<IBoardImage>;
  fetchBoardRandom: IBoard;
  fetchBoards: Array<IBoard>;
  fetchBoardsByLikes: Array<IBoard>;
  fetchCategories: Array<ICategory>;
  fetchCategory: ICategory;
  fetchComments: Array<IComment>;
  fetchKeyword: IKeyword;
  fetchKeywords: Array<IKeyword>;
  fetchLikes: Array<ILike>;
  fetchLoginPointHistories: Array<IPointHistory>;
  fetchLoginUserUrls: Array<IUserUrl>;
  fetchLoginedUser: IUser;
  fetchLogs: Array<IChatMessage>;
  fetchPayments: Array<IPayment>;
  fetchPointHistories: Array<IPointHistory>;
  fetchProjectOfUser: IBoard;
  fetchProjectsOfUser: Array<IBoard>;
  fetchSubComments: Array<ISubComment>;
  fetchTag: ITag;
  fetchTags: Array<ITag>;
  fetchUserBoards: Array<IUserBoard>;
  fetchUserImage: IUserImage;
  fetchUserImages: Array<IUserImage>;
  fetchUserRandom: IUser;
  fetchUserUrls: Array<IUserUrl>;
  fetchUserWithEmail: IUser;
  fetchUserWithUserId: IUser;
  fetchUsers: Array<IUser>;
  getAttendanceCount: Scalars['Float'];
  getAttendanceTime: Scalars['String'];
  getLocationCrew: Scalars['String'];
  getLocationLeader: Scalars['String'];
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


export type IQueryFetchBoardRandomArgs = {
  categoryId: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  isSuccess?: InputMaybe<Scalars['Boolean']>;
  keywordName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
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


export type IQueryFetchPointHistoriesArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchProjectOfUserArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchProjectsOfUserArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchSubCommentsArgs = {
  commentId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchTagArgs = {
  id: Scalars['String'];
};


export type IQueryFetchUserBoardsArgs = {
  boardId?: InputMaybe<Scalars['String']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchUserImageArgs = {
  userImageId: Scalars['String'];
};


export type IQueryFetchUserUrlsArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchUserWithEmailArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUserWithUserIdArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchUsersArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryGetAttendanceCountArgs = {
  boardId: Scalars['String'];
};


export type IQueryGetAttendanceTimeArgs = {
  boardId: Scalars['String'];
};


export type IQueryGetLocationCrewArgs = {
  boardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IQueryGetLocationLeaderArgs = {
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
  users: Array<IUser>;
};

export type IUpdateBoardInput = {
  address?: InputMaybe<Scalars['String']>;
  bail?: InputMaybe<Scalars['Int']>;
  boardImage?: InputMaybe<ICreateBoardImageInput>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  closedAt?: InputMaybe<Scalars['DateTime']>;
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
  commentId: Scalars['String'];
};

export type IUpdateKeywordInput = {
  boards?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<Scalars['String']>>;
};

export type IUpdatePointHistoryInput = {
  amount?: InputMaybe<Scalars['Int']>;
  pointHistory?: InputMaybe<Scalars['String']>;
};

export type IUpdateSubCommentInput = {
  commentId?: InputMaybe<Scalars['String']>;
  subComment?: InputMaybe<Scalars['String']>;
  subCommentId: Scalars['String'];
};

export type IUpdateTagInput = {
  boards?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
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
  url: Scalars['String'];
  user: IUser;
};
