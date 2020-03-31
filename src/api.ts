/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id: string,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  role: UserRole,
  _version?: number | null,
};

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}


export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserRoleInput = {
  eq?: UserRole | null,
  ne?: UserRole | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  role?: UserRole | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateMapFactionInput = {
  id?: string | null,
  mapId: string,
  factionId: string,
  _version?: number | null,
};

export type ModelMapFactionConditionInput = {
  mapId?: ModelIDInput | null,
  factionId?: ModelIDInput | null,
  and?: Array< ModelMapFactionConditionInput | null > | null,
  or?: Array< ModelMapFactionConditionInput | null > | null,
  not?: ModelMapFactionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMapFactionInput = {
  id: string,
  mapId?: string | null,
  factionId?: string | null,
  _version?: number | null,
};

export type DeleteMapFactionInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateMapInput = {
  id: string,
  name: string,
  width: number,
  height: number,
  createdAt: string,
  updatedAt: string,
  factions?: Array< MapFactionInput | null > | null,
  _version?: number | null,
};

export type MapFactionInput = {
  id: string,
  mapId: string,
  factionId: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMapConditionInput = {
  name?: ModelStringInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMapConditionInput | null > | null,
  or?: Array< ModelMapConditionInput | null > | null,
  not?: ModelMapConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMapInput = {
  id: string,
  name?: string | null,
  width?: number | null,
  height?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  factions?: Array< MapFactionInput | null > | null,
  _version?: number | null,
};

export type DeleteMapInput = {
  id: string,
  _version?: number | null,
};

export type CreateFactionInput = {
  id: string,
  name: string,
  userId: string,
  user?: UserInput | null,
  maps?: Array< MapFactionInput | null > | null,
  _version?: number | null,
};

export type UserInput = {
  id: string,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  role: UserRole,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelFactionConditionInput = {
  name?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelFactionConditionInput | null > | null,
  or?: Array< ModelFactionConditionInput | null > | null,
  not?: ModelFactionConditionInput | null,
};

export type UpdateFactionInput = {
  id: string,
  name?: string | null,
  userId?: string | null,
  user?: UserInput | null,
  maps?: Array< MapFactionInput | null > | null,
  _version?: number | null,
};

export type DeleteFactionInput = {
  id: string,
  _version?: number | null,
};

export type CreateUnitInput = {
  id: string,
  name: string,
  factionId?: string | null,
  faction?: FactionInput | null,
  speed: number,
  _version?: number | null,
  unitFactionId?: string | null,
};

export type FactionInput = {
  id: string,
  name: string,
  userId: string,
  user?: UserInput | null,
  maps?: Array< MapFactionInput | null > | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUnitConditionInput = {
  name?: ModelStringInput | null,
  factionId?: ModelIDInput | null,
  speed?: ModelIntInput | null,
  and?: Array< ModelUnitConditionInput | null > | null,
  or?: Array< ModelUnitConditionInput | null > | null,
  not?: ModelUnitConditionInput | null,
};

export type UpdateUnitInput = {
  id: string,
  name?: string | null,
  factionId?: string | null,
  faction?: FactionInput | null,
  speed?: number | null,
  _version?: number | null,
  unitFactionId?: string | null,
};

export type DeleteUnitInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMapFactionFilterInput = {
  id?: ModelIDInput | null,
  mapId?: ModelIDInput | null,
  factionId?: ModelIDInput | null,
  and?: Array< ModelMapFactionFilterInput | null > | null,
  or?: Array< ModelMapFactionFilterInput | null > | null,
  not?: ModelMapFactionFilterInput | null,
};

export type ModelMapFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMapFilterInput | null > | null,
  or?: Array< ModelMapFilterInput | null > | null,
  not?: ModelMapFilterInput | null,
};

export type ModelFactionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelFactionFilterInput | null > | null,
  or?: Array< ModelFactionFilterInput | null > | null,
  not?: ModelFactionFilterInput | null,
};

export type ModelUnitFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  factionId?: ModelIDInput | null,
  speed?: ModelIntInput | null,
  and?: Array< ModelUnitFilterInput | null > | null,
  or?: Array< ModelUnitFilterInput | null > | null,
  not?: ModelUnitFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelFactionConnection",
      items:  Array< {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    role: UserRole,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelFactionConnection",
      items:  Array< {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    role: UserRole,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelFactionConnection",
      items:  Array< {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    role: UserRole,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMapFactionMutationVariables = {
  input: CreateMapFactionInput,
  condition?: ModelMapFactionConditionInput | null,
};

export type CreateMapFactionMutation = {
  createMapFaction:  {
    __typename: "MapFaction",
    id: string,
    mapId: string,
    factionId: string,
    map:  {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMapFactionMutationVariables = {
  input: UpdateMapFactionInput,
  condition?: ModelMapFactionConditionInput | null,
};

export type UpdateMapFactionMutation = {
  updateMapFaction:  {
    __typename: "MapFaction",
    id: string,
    mapId: string,
    factionId: string,
    map:  {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMapFactionMutationVariables = {
  input: DeleteMapFactionInput,
  condition?: ModelMapFactionConditionInput | null,
};

export type DeleteMapFactionMutation = {
  deleteMapFaction:  {
    __typename: "MapFaction",
    id: string,
    mapId: string,
    factionId: string,
    map:  {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMapMutationVariables = {
  input: CreateMapInput,
  condition?: ModelMapConditionInput | null,
};

export type CreateMapMutation = {
  createMap:  {
    __typename: "Map",
    id: string,
    name: string,
    width: number,
    height: number,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMapMutationVariables = {
  input: UpdateMapInput,
  condition?: ModelMapConditionInput | null,
};

export type UpdateMapMutation = {
  updateMap:  {
    __typename: "Map",
    id: string,
    name: string,
    width: number,
    height: number,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMapMutationVariables = {
  input: DeleteMapInput,
  condition?: ModelMapConditionInput | null,
};

export type DeleteMapMutation = {
  deleteMap:  {
    __typename: "Map",
    id: string,
    name: string,
    width: number,
    height: number,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFactionMutationVariables = {
  input: CreateFactionInput,
  condition?: ModelFactionConditionInput | null,
};

export type CreateFactionMutation = {
  createFaction:  {
    __typename: "Faction",
    id: string,
    name: string,
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    units:  {
      __typename: "ModelUnitConnection",
      items:  Array< {
        __typename: "Unit",
        id: string,
        name: string,
        factionId: string | null,
        speed: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    maps:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFactionMutationVariables = {
  input: UpdateFactionInput,
  condition?: ModelFactionConditionInput | null,
};

export type UpdateFactionMutation = {
  updateFaction:  {
    __typename: "Faction",
    id: string,
    name: string,
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    units:  {
      __typename: "ModelUnitConnection",
      items:  Array< {
        __typename: "Unit",
        id: string,
        name: string,
        factionId: string | null,
        speed: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    maps:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFactionMutationVariables = {
  input: DeleteFactionInput,
  condition?: ModelFactionConditionInput | null,
};

export type DeleteFactionMutation = {
  deleteFaction:  {
    __typename: "Faction",
    id: string,
    name: string,
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    units:  {
      __typename: "ModelUnitConnection",
      items:  Array< {
        __typename: "Unit",
        id: string,
        name: string,
        factionId: string | null,
        speed: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    maps:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUnitMutationVariables = {
  input: CreateUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type CreateUnitMutation = {
  createUnit:  {
    __typename: "Unit",
    id: string,
    name: string,
    factionId: string | null,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    speed: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUnitMutationVariables = {
  input: UpdateUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type UpdateUnitMutation = {
  updateUnit:  {
    __typename: "Unit",
    id: string,
    name: string,
    factionId: string | null,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    speed: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUnitMutationVariables = {
  input: DeleteUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type DeleteUnitMutation = {
  deleteUnit:  {
    __typename: "Unit",
    id: string,
    name: string,
    factionId: string | null,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    speed: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelFactionConnection",
      items:  Array< {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    role: UserRole,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncMapFactionsQueryVariables = {
  filter?: ModelMapFactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMapFactionsQuery = {
  syncMapFactions:  {
    __typename: "ModelMapFactionConnection",
    items:  Array< {
      __typename: "MapFaction",
      id: string,
      mapId: string,
      factionId: string,
      map:  {
        __typename: "Map",
        id: string,
        name: string,
        width: number,
        height: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      },
      faction:  {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      },
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncMapsQueryVariables = {
  filter?: ModelMapFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMapsQuery = {
  syncMaps:  {
    __typename: "ModelMapConnection",
    items:  Array< {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetMapQueryVariables = {
  id: string,
};

export type GetMapQuery = {
  getMap:  {
    __typename: "Map",
    id: string,
    name: string,
    width: number,
    height: number,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMapsQueryVariables = {
  id?: string | null,
  filter?: ModelMapFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMapsQuery = {
  listMaps:  {
    __typename: "ModelMapConnection",
    items:  Array< {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncFactionsQueryVariables = {
  filter?: ModelFactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFactionsQuery = {
  syncFactions:  {
    __typename: "ModelFactionConnection",
    items:  Array< {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetFactionQueryVariables = {
  id: string,
};

export type GetFactionQuery = {
  getFaction:  {
    __typename: "Faction",
    id: string,
    name: string,
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    units:  {
      __typename: "ModelUnitConnection",
      items:  Array< {
        __typename: "Unit",
        id: string,
        name: string,
        factionId: string | null,
        speed: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    maps:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFactionsQueryVariables = {
  id?: string | null,
  filter?: ModelFactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFactionsQuery = {
  listFactions:  {
    __typename: "ModelFactionConnection",
    items:  Array< {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncUnitsQueryVariables = {
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUnitsQuery = {
  syncUnits:  {
    __typename: "ModelUnitConnection",
    items:  Array< {
      __typename: "Unit",
      id: string,
      name: string,
      factionId: string | null,
      faction:  {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      speed: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetUnitQueryVariables = {
  id: string,
};

export type GetUnitQuery = {
  getUnit:  {
    __typename: "Unit",
    id: string,
    name: string,
    factionId: string | null,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    speed: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUnitsQueryVariables = {
  id?: string | null,
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUnitsQuery = {
  listUnits:  {
    __typename: "ModelUnitConnection",
    items:  Array< {
      __typename: "Unit",
      id: string,
      name: string,
      factionId: string | null,
      faction:  {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      speed: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type UserByEmailQueryVariables = {
  email?: string | null,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByEmailQuery = {
  userByEmail:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type UserByUsernameQueryVariables = {
  username?: string | null,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByUsernameQuery = {
  userByUsername:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type MapByNameQueryVariables = {
  name?: string | null,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMapFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MapByNameQuery = {
  mapByName:  {
    __typename: "ModelMapConnection",
    items:  Array< {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type FactionByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FactionByUserIdQuery = {
  factionByUserId:  {
    __typename: "ModelFactionConnection",
    items:  Array< {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type UnitByFactionIdQueryVariables = {
  factionId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UnitByFactionIdQuery = {
  unitByFactionId:  {
    __typename: "ModelUnitConnection",
    items:  Array< {
      __typename: "Unit",
      id: string,
      name: string,
      factionId: string | null,
      faction:  {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      speed: number,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelFactionConnection",
      items:  Array< {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    role: UserRole,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelFactionConnection",
      items:  Array< {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    role: UserRole,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelFactionConnection",
      items:  Array< {
        __typename: "Faction",
        id: string,
        name: string,
        userId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    role: UserRole,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMapFactionSubscription = {
  onCreateMapFaction:  {
    __typename: "MapFaction",
    id: string,
    mapId: string,
    factionId: string,
    map:  {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMapFactionSubscription = {
  onUpdateMapFaction:  {
    __typename: "MapFaction",
    id: string,
    mapId: string,
    factionId: string,
    map:  {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMapFactionSubscription = {
  onDeleteMapFaction:  {
    __typename: "MapFaction",
    id: string,
    mapId: string,
    factionId: string,
    map:  {
      __typename: "Map",
      id: string,
      name: string,
      width: number,
      height: number,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    },
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMapSubscription = {
  onCreateMap:  {
    __typename: "Map",
    id: string,
    name: string,
    width: number,
    height: number,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMapSubscription = {
  onUpdateMap:  {
    __typename: "Map",
    id: string,
    name: string,
    width: number,
    height: number,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMapSubscription = {
  onDeleteMap:  {
    __typename: "Map",
    id: string,
    name: string,
    width: number,
    height: number,
    createdAt: string,
    updatedAt: string,
    factions:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFactionSubscription = {
  onCreateFaction:  {
    __typename: "Faction",
    id: string,
    name: string,
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    units:  {
      __typename: "ModelUnitConnection",
      items:  Array< {
        __typename: "Unit",
        id: string,
        name: string,
        factionId: string | null,
        speed: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    maps:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFactionSubscription = {
  onUpdateFaction:  {
    __typename: "Faction",
    id: string,
    name: string,
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    units:  {
      __typename: "ModelUnitConnection",
      items:  Array< {
        __typename: "Unit",
        id: string,
        name: string,
        factionId: string | null,
        speed: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    maps:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFactionSubscription = {
  onDeleteFaction:  {
    __typename: "Faction",
    id: string,
    name: string,
    userId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      factions:  {
        __typename: "ModelFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      role: UserRole,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    units:  {
      __typename: "ModelUnitConnection",
      items:  Array< {
        __typename: "Unit",
        id: string,
        name: string,
        factionId: string | null,
        speed: number,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    maps:  {
      __typename: "ModelMapFactionConnection",
      items:  Array< {
        __typename: "MapFaction",
        id: string,
        mapId: string,
        factionId: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUnitSubscription = {
  onCreateUnit:  {
    __typename: "Unit",
    id: string,
    name: string,
    factionId: string | null,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    speed: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUnitSubscription = {
  onUpdateUnit:  {
    __typename: "Unit",
    id: string,
    name: string,
    factionId: string | null,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    speed: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUnitSubscription = {
  onDeleteUnit:  {
    __typename: "Unit",
    id: string,
    name: string,
    factionId: string | null,
    faction:  {
      __typename: "Faction",
      id: string,
      name: string,
      userId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        role: UserRole,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
      } | null,
      units:  {
        __typename: "ModelUnitConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      maps:  {
        __typename: "ModelMapFactionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
    } | null,
    speed: number,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
  } | null,
};
