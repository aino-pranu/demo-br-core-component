/**
 * ActionType class to configure two types of actions.
 * Entity action: actions which needs entity object.
 * Core action: actions which doesn't need an entity object.
 */
export class ActionTypes{

    // actions which needs entity object
    static readonly entity:string="entity_action";

    // actions which doesn't need an entity object
    static readonly core :string="core_action";
}