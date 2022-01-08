/* eslint-disable class-methods-use-this,max-len */

import HttpClient from './HttpClient';

class _Api {
  /**
   * Загрузка списка видов неисправностей
   *
   * @returns {Promise<*>} - Список видов неисправностей
   */
  async getMalfunctionTypes() {
    const response = await HttpClient.get('malfunctiontypes');
    return response.data;
  }

  /**
   * Создание нового вида неисправности
   *
   * @param params.name {string} - наименование
   * @param params.parusFailureType {number} - вид неисправности в системе "Парус"
   * @param params.parusFailureCode {number} - код неисправности в системе "Парус"
   * @param params.description {string} - примечание
   * @param params.isSwitchLine {boolean} - признак переключения линии
   *
   * @returns {Promise<*>} - Созданный вид неисправности
   */
  async createMalfanctonType(params) {
    const response = await HttpClient.post('malfunctiontypes', params);
    return response.data;
  }

  /**
   * Изменение вида неисправности
   *
   * @param id - идентификатор
   * @param params
   * @param params.name {string} - наименование
   * @param params.parusType {number} - вид неисправности в системе "Парус"
   * @param params.parusId {number} - код неисправности в системе "Парус"
   * @param params.description {string} - примечание
   * @param params.isSwitchLine {boolean} - признак переключения линии
   *
   * @returns {Promise<*>} - Измененный вид неисправности
   */
  async updateMalfanctonType(id, params) {
    const response = await HttpClient.put(`malfunctiontypes/${id}`, params);
    return response.data;
  }

  /**
   * Удаление вида неисправности
   *
   * @param id - идентификатор
   *
   * @returns {Promise<*>}
   */
  async removeMalfanctonType(id) {
    const response = await HttpClient.delete(`malfunctiontypes/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка единиц измерения
   *
   * @returns {Promise<*>} - Список единиц измерения
   */
  async getUnits() {
    const response = await HttpClient.get('units');
    return response.data;
  }

  /**
   * Создание новой единицы измерения
   *
   * @param {string} params.name - наименование
   * @param {string} params.parusName - наименование в системе "Парус"
   * @param {number} params.conversionRate - коэффициент перевода для системы "Парус"
   * @param {number} params.type - идентификатор типа единицы измерения
   *
   * @returns {Promise<*>} - Созданная единица измерения
   */
  async createUnit(params) {
    const response = await HttpClient.post('units', params);
    return response.data;
  }

  /**
   * Обновление единицы измерения
   *
   * @param {number} params.id - уникальный идентификатор
   * @param {string} params.name - наименование
   * @param {string} params.parusName - наименование в системе "Парус"
   * @param {number} params.conversionRate - коэффициент перевода для системы "Парус"
   * @param {number} params.type - идентификатор типа единицы измерения
   *
   * @returns {Promise<*>} - Обновленная единицы измерения
   */
  async updateUnit(params) {
    const response = await HttpClient.put(`units/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление единицы измерения
   *
   * @param {number} id - уникальный идентификатор
   *
   * @returns {Promise<*>}
   */
  async removeUnit(id) {
    const response = await HttpClient.delete(`units/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка типов простоев
   *
   * @param isElectrical {boolean} - тип простоя является электрическим
   *
   * @returns {Promise<*>}
   */
  async getIdleTypes(isElectrical) {
    const response = await HttpClient.get('idletypes', { params: { isElectrical } });
    return response.data;
  }

  /**
   * Создание нового типа простоя
   *
   * @param params.name {string} - наименование
   * @param params.textColorId {number} - уникальный идентификатор цвета текста
   * @param params.backgroundColorId {number} - уникальный идентификатор цвета фона
   * @param params.electricalColorId {number} - уникальный идентификатор цвета энерго-простоя
   * @param params.listPriority {number} - приоритет в списке
   * @param params.renderType {number} - тип рендеринга элемента
   * @param params.isClosingOperation {boolean} - относится к ПЗО
   * @param params.parusCodeToAsd {string} - код в системе "Парус" для интеграции с АСД "Автограф"
   * @param params.parusCodeExport {string} - код в системе "Парус" для экспорта в "Парус"
   * @param params.parusName {string} - наименование в системе "Парус"
   * @param params.sapCode {string} - код SAP
   * @param params.equipmentTypeIds {Array<number>} - уникальные идентификаторы видов оборудования
   * @param params.malfunctionTypeIds {Array<number>} - уникальные идентификаторы видов неисправностей
   *
   * @returns {Promise<*>}
   */
  async createIdleType(params) {
    const response = await HttpClient.post('idletypes', params);
    return response.data;
  }

  /**
   * Обновление типа простоя
   *
   * @param params.id {number} - уникальный идентификатор
   * @param params.name {string} - наименование
   * @param params.textColorId {number} - уникальный идентификатор цвета текста
   * @param params.backgroundColorId {number} - уникальный идентификатор цвета фона
   * @param params.electricalColorId {number} - уникальный идентификатор цвета энерго-простоя
   * @param params.listPriority {number} - приоритет в списке
   * @param params.renderType {number} - тип рендеринга элемента
   * @param params.isClosingOperation {boolean} - относится к ПЗО
   * @param params.parusCodeToAsd {string} - код в системе "Парус" для интеграции с АСД "Автограф"
   * @param params.parusCodeExport {string} - код в системе "Парус" для экспорта в "Парус"
   * @param params.parusName {string} - наименование в системе "Парус"
   * @param params.sapCode {string} - код SAP
   * @param params.equipmentTypeIds {Array<number>} - уникальные идентификаторы видов оборудования
   * @param params.malfunctionTypeIds {Array<number>} - уникальные идентификаторы видов неисправностей
   *
   * @returns {Promise<*>}
   */
  async updateIdleType(params) {
    const response = await HttpClient.put(`idletypes/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление типа простоя
   *
   * @param id {number} - уникальный идентификатор
   *
   * @returns {Promise<Void>}
   */
  async removeIdleType(id) {
    const response = await HttpClient.delete(`idletypes/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка типов работы
   *
   * @returns {Promise<*>} - Список типов работы
   */
  async getWorkTypes() {
    const response = await HttpClient.get('worktypes');
    return response.data;
  }

  /**
   * Создание нового типа работы
   *
   * @param {string} params.name - наименование
   * @param {number} params.unitId - уникальный идентификатор ед. изм.
   * @param {number} params.textColorId - уникальный идентификатор цвета текста
   * @param {number} params.backgroundColorId - уникальный идентификатор цвета фона
   * @param {number} params.listPriority - приоритет в списке
   * @param {number} params.renderType - тип рендеринга элемента
   * @param {number} params.timelineRenderType - тип рендеринга для 7-го типа renderType
   * @param {number} params.defaultValue - значение (вес/объем/длина) по умолчанию для данного типа работ
   * @param params.parusCodeToAsd {string} - код в системе "Парус" для интеграции с АСД "Автограф"
   * @param params.parusCodeExport {string} - код в системе "Парус" для экспорта в "Парус"
   * @param {string} params.parusName - наименование в системе "Парус"
   * @param {string} params.sapCode - код SAP
   *
   * @returns {Promise<*>} - Созданный тип работы
   */
  async createWorkType(params) {
    const response = await HttpClient.post('worktypes', params);
    return response.data;
  }

  /**
   * Обновление типа работы
   *
   * @param {number} params.id - уникальный идентификатор
   * @param {string} params.name - наименование
   * @param {number} params.unitId - уникальный идентификатор ед. изм.
   * @param {number} params.textColorId - уникальный идентификатор цвета текста
   * @param {number} params.backgroundColorId - уникальный идентификатор цвета фона
   * @param {number} params.listPriority - приоритет в списке
   * @param {number} params.renderType - тип рендеринга элемента
   * @param {number} params.timelineRenderType - тип рендеринга для 7-го типа renderType
   * @param {number} params.defaultValue - значение (вес/объем/длина) по умолчанию для данного типа работ
   * @param params.parusCodeToAsd {string} - код в системе "Парус" для интеграции с АСД "Автограф"
   * @param params.parusCodeExport {string} - код в системе "Парус" для экспорта в "Парус"
   * @param {string} params.parusName - наименование в системе "Парус"
   * @param {string} params.sapCode - код SAP
   *
   * @returns {Promise<*>} - Обновленный тип работы
   */
  async updateWorkType(params) {
    const response = await HttpClient.put(`worktypes/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление типа работы
   *
   * @param {number} id - уникальный идентификатор
   *
   * @returns {Promise<*>}
   */
  async removeWorkType(id) {
    const response = await HttpClient.delete(`worktypes/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка пользователей
   *
   * @returns {Promise<*>} - Список пользователей
   */
  async getUsers() {
    const response = await HttpClient.get('users');
    return response.data;
  }

  /**
   * Загрузка пользователя по Id
   *
   * @param userId {number} - уникальный идентификатор пользователя
   * @returns {Promise<*>} - Пользователь
   */
  async getUserById(userId) {
    const response = await HttpClient.get(`users/${userId}`);
    return response.data;
  }

  /**
   * Создание пользователя
   *
   * @param params.name {string} - фио
   * @param params.domainUserName {string} - имя пользователя в домене
   * @param params.groupIds {number} - уникальные идентификаторы пользовательских групп
   *
   * @returns {Promise<*>} - Созданный пользователь
   */
  async createUser(params) {
    const response = await HttpClient.post('users', params);
    return response.data;
  }

  /**
   * Обновление данных пользователя
   *
   * @param params.id {number} - уникальный идентификатор пользователя
   * @param params.name {string} - ФИО
   * @param params.domainUserName {string} - имя пользователя в домене
   * @param params.groupIds {number} - уникальные идентификаторы пользовательских групп
   *
   * @returns {Promise<*>} - Обновленный пользователь
   */
  async updateUser(params) {
    const response = await HttpClient.put(`users/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление пользователя
   *
   * @param id {number} - уникальный идентификатор пользователя
   *
   * @returns {Promise<*>}
   */
  async removeUser(id) {
    const response = await HttpClient.delete(`users/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка горизонтов
   *
   * @returns {Promise<*>} - Список горизонтов
   */
  async getHorizons() {
    const response = await HttpClient.get('horizons');
    return response.data;
  }

  /**
   * Создание горизонта
   *
   * @param params.name {string} - Наименование
   *
   * @returns {Promise<*>} - Созданный горизонт
   */
  async createHorizon(params) {
    const response = await HttpClient.post('horizons', params);
    return response.data;
  }

  /**
   * Обновление горизонта
   *
   * @param params.id {number} - Идентификатор
   * @param params.name {string} - Наименование
   * @returns {Promise<*>} - Обновленный горизонт
   */
  async updateHorizon(params) {
    const response = await HttpClient.put(`horizons/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление горизонта
   *
   * @param id {number} - Идентификатор
   *
   * @returns {Promise<*>}
   */
  async removeHorizon(id) {
    const response = await HttpClient.delete(`horizons/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка отвалов
   *
   * @returns {Promise<*>} - Список отвалов
   */
  async getDumpAreas() {
    const response = await HttpClient.get('dumpareas');
    return response.data;
  }

  /**
   * Создание отвала
   *
   * @param params.name {string} - наименование
   *
   * @returns {Promise<*>} - Созданный отвал
   */
  async createDumpArea(params) {
    const response = await HttpClient.post('dumpareas', params);
    return response.data;
  }

  /**
   * Обновление данных отвала
   *
   * @param params.id {number} - уникальный идентификатор пользователя
   * @param params.name {string} - наименование
   *
   * @returns {Promise<*>} - Обновленный отвал
   */
  async updateDumpArea(params) {
    const response = await HttpClient.put(`dumpareas/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление отвала
   *
   * @param id {number} - уникальный идентификатор отвала
   *
   * @returns {Promise<*>}
   */
  async removeDumpArea(id) {
    const response = await HttpClient.delete(`dumpareas/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка оборудования
   *
   * @returns {Promise<*>} - Список оборудования
   */
  async getEquipment() {
    const response = await HttpClient.get('equipments');
    return response.data;
  }

  /**
   * Создание оборудования
   *
   * @param {string} params.name - Наименование
   * @param {number} params.number - Номер
   * @param {string} params.ftpDirectory - Папка на ftp
   * @param {string} params.parusCode - Код в Парусе
   * @param {number} params.type - Вид
   * @param {string} params.sapCode - Код SAP
   * @param {[number]} params.ekpCodes - Коды ЕКП
   * @param {number} params.machinePerformance - Производительность машины
   *
   * @returns {Promise<*>} - созданное оборудование
   */
  async createEquipment(params) {
    const response = await HttpClient.post('equipments', params);
    return response.data;
  }

  /**
   * Обновление оборудования
   *
   * @param {number} params.id - уникальный идентификатор
   * @param {string} params.name - Наименование
   * @param {number} params.number - Номер
   * @param {string} params.ftpDirectory - Папка на ftp
   * @param {string} params.parusCode - Код в Парусе
   * @param {number} params.type - Вид
   * @param {string} params.sapCode - Код SAP
   * @param {[number]} params.ekpCodes - Коды ЕКП
   * @param {number} params.machinePerformance - Производительность машины
   * @returns {Promise<*>} - обновленное оборудование
   */
  async updateEquipment(params) {
    const response = await HttpClient.put(`equipments/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление оборудования
   *
   * @param id {number} - уникальный идентификатор
   *
   * @returns {Promise<void>}
   */
  async removeEquipment(id) {
    const response = await HttpClient.delete(`equipments/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка пластов
   *
   * @returns {Promise<*>} - Список пластов
   */
  async getBeds() {
    const response = await HttpClient.get('beds');
    return response.data;
  }

  /**
   * Создание пласта
   *
   * @param params.name {string} - наименование пласта
   * @param params.ash {number} - зола
   * @param params.heat {number} - теплота
   * @param params.moisture {number} - влага
   *
   * @returns {Promise<*>} - Созданный пласт
   */
  async createBed(params) {
    const response = await HttpClient.post('beds', params);
    return response.data;
  }

  /**
   * Обновление данных пласта
   *
   * @param params.id {number} - уникальный идентификатор пласта
   * @param params.name {string} - наименование пласта
   * @param params.ash {number} - зола
   * @param params.heat {number} - теплота
   * @param params.moisture {number} - влага
   *
   * @returns {Promise<*>} - Обновленный пласт
   */
  async updateBed(params) {
    const response = await HttpClient.put(`beds/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление пласта
   *
   * @param id {number} - уникальный идентификатор пласта
   *
   * @returns {Promise<Void>}
   */
  async removeBed(id) {
    const response = await HttpClient.delete(`beds/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка крыльев
   *
   * @returns {Promise<*>} - Список крыльев
   */
  async getWings() {
    const response = await HttpClient.get('wings');
    return response.data;
  }

  /**
   * Создание крыла
   *
   * @param params.name {string} - Наименование
   * @param params.backgroundColorId {number} - уникальный идентификатор цвета
   *
   * @returns {Promise<*>} - Созданное крыло
   */
  async createWing(params) {
    const response = await HttpClient.post('wings', params);
    return response.data;
  }

  /**
   * Обновление крыла
   *
   * @param params.id {number} - уникальный идентификатор крыла
   * @param params.backgroundColorId {number} - уникальный идентификатор цвета
   * @param params.name {string} - наименование
   *
   * @returns {Promise<*>} - Обновленное крыло
   */
  async updateWing(params) {
    const response = await HttpClient.put(`wings/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление крыла
   *
   * @param id {number} - уникальный идентификатор крыла
   *
   * @returns {Promise<*>}
   */
  async removeWing(id) {
    const response = await HttpClient.delete(`wings/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка участков
   *
   * @returns {Promise<*>} - Список участков
   */
  async getSections() {
    const response = await HttpClient.get('sections');
    return response.data;
  }

  /**
   * Создание участка
   *
   * @param {string} params.name - наименование
   * @param {number} params.type - тип
   * @param {boolean} params.hasCarLoadings - отображать подачи
   * @param {boolean} params.hasLocomotiveTrains - отображать локомотиво-составы
   * @param {boolean} params.isShow - отображать участок на TimeLine
   *
   * @returns {Promise<*>} - Созданный участок
   */
  async createSection(params) {
    const response = await HttpClient.post('sections', params);
    return response.data;
  }

  /**
   * Обновление данных участка
   *
   * @param params.id {number} - уникальный идентификатор участка
   * @param params.name {string} - наименование
   * @param params.type {number} - тип
   * @param {boolean} params.hasCarLoadings - отображать подачи
   * @param {boolean} params.hasLocomotiveTrains - отображать локомотиво-составы
   * @param {boolean} params.isShow - отображать участок на TimeLine
   *
   * @returns {Promise<*>} - Обновленный участок
   */
  async updateSection(params) {
    const response = await HttpClient.put(`sections/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление участка
   *
   * @param id {number} - уникальный идентификатор участка
   *
   * @returns {Promise<*>}
   */
  async removeSection(id) {
    const response = await HttpClient.delete(`sections/${id}`);
    return response.data;
  }

  /**
   * Загрузка наряда
   *
   * @param date - дата
   * @param shift - смена
   * @param sectionId - уникальный идентификатор участка
   * @returns {Promise<*>}
   */
  async getOrderBy(date, shift, sectionId) {
    const response = await HttpClient.get(
      `sections/${sectionId}/orders/${date}/${shift}`,
    );
    return response.data;
  }

  /**
   * Получить оборудование наряда
   *
   * @param params.date - дата
   * @param params.shift - смена
   * @param params.sectionId - уникальный идентификатор участка
   * @param params.id - уникальный идентификатор оборудование наряда
   *
   * @returns {Promise<*>} - измененное оборудование наряда
   */
  async getOrderEqiupment(params) {
    const response = await HttpClient.get(
      `sections/${params.sectionId}/orders/${params.date}/${params.shift}/orderequipments/${params.id}`,
    );
    return response.data;
  }

  /**
   * Создание оборудования наряда
   *
   * @param params.item - оборудование наряда
   * @param params.date - дата
   * @param params.shift - смена
   * @param params.sectionId - уникальный идентификатор участка
   *
   * @returns {Promise<*>} - созданное оборудование наряда
   */
  async createOrderEquipment(params) {
    const response = await HttpClient.post(
      `sections/${params.sectionId}/orders/${params.date}/${params.shift}/orderequipments`,
      params.item,
    );
    return response.data;
  }

  /**
   * Создание оборудований наряда на основе предыдущей смены
   *
   * @param params.date - дата
   * @param params.shift - смена
   * @param params.sectionId - уникальный идентификатор участка
   *
   * @returns {Promise<*>} - созданные оборудования наряда
   */
  async createAllOrderEquipmentsByPrevious(params) {
    const response = await HttpClient.post(
      `sections/${params.sectionId}/orders/${params.date}/${params.shift}/orderequipments/:createallbyprevious`,
    );
    return response.data;
  }

  /**
   * Создание оборудований наряда на основе данных из ЕКП
   *
   * @param date - дата
   * @param shift - смена
   * @param sectionId - уникальный идентификатор участка
   * @param params
   * @param params.equipmentIds - уникальные идентификаторы оборудований
   *
   * @returns {Promise<*>} - созданные оборудования наряда
   */
  async createAllOrderEquipmentsByEkp(date, shift, sectionId, params) {
    const response = await HttpClient.post(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/:createallbyekp`,
      params,
    );
    return response.data;
  }

  /**
   * Получение оборудований наряда на основе данных из ЕКП
   *
   * @param params.date - дата
   * @param params.shift - смена
   * @param params.sectionId - уникальный идентификатор участка
   *
   * @returns {Promise<*>} - созданные оборудования наряда
   */
  async getAllOrderEquipmentsByEkp(params) {
    const response = await HttpClient.post(
      `sections/${params.sectionId}/orders/${params.date}/${params.shift}/orderequipments/:getAllByEkp`,
    );
    return response.data;
  }

  /**
   * Обновление оборудования наряда
   *
   * @param params.item - оборудование наряда
   * @param params.date - дата
   * @param params.shift - смена
   * @param params.sectionId - уникальный идентификатор участка
   *
   * @returns {Promise<*>} - измененное оборудование наряда
   */
  async updateOrderEquipment(params) {
    const response = await HttpClient.put(
      `sections/${params.sectionId}/orders/${params.date}/${params.shift}/orderequipments/${params.item.id}`,
      params.item,
    );
    return response.data;
  }

  /**
   * Удаление оборудования наряда
   *
   * @param params.date - дата
   * @param params.shift - смена
   * @param params.sectionId - уникальный идентификатор участка
   * @param params.id - уникальный идентификатор оборудование наряда
   *
   * @returns {Promise<*>}
   */
  async removeOrderEquipment(params) {
    const response = await HttpClient.delete(
      `sections/${params.sectionId}/orders/${params.date}/${params.shift}/orderequipments/${params.id}`,
    );
    return response.data;
  }

  /**
   * Создание наряда
   *
   * @param params
   * @param params.date - дата
   * @param params.shift - смена
   * @param params.sectionId - уникальный идентификатор участка
   * @param params.dispatcherId - уникальный идентификатор сотрудника
   * @param params.supervisorId - уникальный идентификатор сотрудника
   * @returns {Promise<*>}
   */
  async createOrder(params) {
    const response = await HttpClient.post(
      `sections/${params.sectionId}/orders`,
      params,
    );
    return response.data;
  }

  /**
   * Закрытие/открытие смены
   *
   * @param date - дата
   * @param  shift- смеа
   * @param  sectionId - уникальный идентификатор участка
   * @returns {Promise<*>} - Статус смены(открыта/закрта)
   */
  async changeShiftStatus(date, shift, sectionId) {
    const response = await HttpClient.post(`sections/${sectionId}/orders/${date}/${shift}:toggleopen`);
    return response.data;
  }

  /**
   * Обновление наряда
   *
   * @param params - наряд
   * @returns {Promise<*>}
   */
  async updateOrder(params) {
    const response = await HttpClient.put(
      `sections/${params.sectionId}/orders/${params.date}/${params.shift}`,
      params,
    );
    return response.data;
  }

  /**
   * Установить ПЗО всему оборудованию в наряде
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param sectionId {number} - уникальный идентификатор участка
   *
   * @returns {Promise<*>} - Наряд
   */
  async setAllClosingOperations(sectionId, date, shift) {
    const response = await HttpClient.post(`sections/${sectionId}/orders/${date}/${shift}:setallclosingoperations`);

    return response.data;
  }

  /**
   * Снять ПЗО всему оборудованию в наряде
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param sectionId {number} - уникальный идентификатор участка
   *
   * @returns {Promise<*>} - Наряд
   */
  async unsetAllClosingOperations(sectionId, date, shift) {
    const response = await HttpClient.post(`sections/${sectionId}/orders/${date}/${shift}:unsetallclosingoperations`);

    return response.data;
  }

  /**
   * Загрузка списка цветов
   *
   * @returns {Promise<*>} - Список цветов
   */
  async getColors() {
    const response = await HttpClient.get('colors');
    return response.data;
  }

  /**
   * Создание цвета
   *
   * @param params.name {string} - наименование цвета
   * @param params.colorHex {string} - hex-код
   *
   * @returns {Promise<*>} - Созданный цвет
   */
  async createColor(params) {
    const response = await HttpClient.post('colors', params);
    return response.data;
  }

  /**
   * Обновление данных цвета
   *
   * @param params.id {number} - уникальный идентификатор цвета
   * @param params.name {string} - наименование цвета
   * @param params.colorHex {string} - hex-код
   *
   * @returns {Promise<*>} - Обновленный цвет
   */
  async updateColor(params) {
    const response = await HttpClient.put(`colors/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление цвета
   *
   * @param id {number} - уникальный идентификатор цвета
   *
   * @returns {Promise<*>}
   */
  async removeColor(id) {
    const response = await HttpClient.delete(`colors/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка угля
   *
   * @returns {Promise<*>} - Список угля
   */
  async getCoals() {
    const response = await HttpClient.get('coaltypes');
    return response.data;
  }

  /**
   * Создание угля
   *
   * @param params.name {string} - наименование угля
   * @param params.isSort {boolean} - флаг "сортовой уголь"
   *
   * @returns {Promise<*>} - Созданный уголь
   */
  async createCoal(params) {
    const response = await HttpClient.post('coaltypes', params);
    return response.data;
  }

  /**
   * Обновление данных угля
   *
   * @param params.id {number} - уникальный идентификатор угля
   * @param params.name {string} - наименование угля
   * @param params.isSort {boolean} - флаг "сортовой уголь"
   *
   * @returns {Promise<*>} - Обновленный уголь
   */
  async updateCoal(params) {
    const response = await HttpClient.put(`coaltypes/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление угля
   *
   * @param id {number} - уникальный идентификатор угля
   *
   * @returns {Promise<*>}
   */
  async removeCoal(id) {
    const response = await HttpClient.delete(`coaltypes/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка локомотивов
   *
   * params.isInWork {boolean} - флаг "в работе"
   * @returns {Promise<*>} - Список локомотивов
   */
  async getLocomotives(params) {
    const response = await HttpClient.get('locomotives', { params });
    return response.data;
  }

  /**
   * Создание локомотива
   *
   * @param {string} params.mark - марка локомотива
   * @param {number} params.number - номер локомотива
   * @param {number} params.textColorId - уникальный идентификатор цвета текста
   * @param {number} params.backgroundColorId - уникальный идентификатор цвета фона
   * @param {boolean} params.inWork - флаг "в работе"
   * @param {string} params.sapCode - код SAP
   *
   * @returns {Promise<*>} - Созданный локомотив
   */
  async createLocomotive(params) {
    const response = await HttpClient.post('locomotives', params);
    return response.data;
  }

  /**
   * Обновление данных локомотива
   *
   * @param {number} params.id - уникальный идентификатор локомотива
   * @param {string} params.mark - марка локомотива
   * @param {number} params.number - номер локомотива
   * @param {number} params.textColorId - уникальный идентификатор цвета текста
   * @param {number} params.backgroundColorId - уникальный идентификатор цвета фона
   * @param {boolean} params.inWork - флаг "в работе"
   * @param {string} params.sapCode - код SAP
   *
   * @returns {Promise<*>} - Обновленный локомотив
   */
  async updateLocomotive(params) {
    const response = await HttpClient.put(`locomotives/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление локомотива
   *
   * @param id {number} - уникальный идентификатор локомотива
   *
   * @returns {Promise<*>}
   */
  async removeLocomotive(id) {
    const response = await HttpClient.delete(`locomotives/${id}`);
    return response.data;
  }

  /**
   * Загрузка работы
   *
   * @param sectionId - уникальный идентификатор участка
   * @param date - дата
   * @param shift - смена
   * @param orderEquipmentId - уникальный идентификатор оборудования
   * @param workId - уникальный идентификатор работы
   *
   * @returns {Promise<*>}
   */
  async getWork(sectionId, date, shift, orderEquipmentId, workId) {
    const response = await HttpClient.get(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/works/${workId}`,
    );
    return response.data;
  }

  /**
   * Создание работы
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {string} date - дата
   * @param {number} shift - смена
   * @param {number} orderEquipmentId - уникальный идентификатор оборудования
   * @param {Object} params
   * @param {string} params.startingDatetime - дата и время начала работы
   * @param {string} params.endingDatetime - дата и время окончания работы
   * @param {number} params.workTypeId - уникальный идентификатор типа работы
   * @param {string} params.description - описание
   * @param {number} params.value - пользовательское поле
   * @param {number} params.newWeight - новый вес
   * @param {number} params.carRide - рейсы или вагоны
   * @param {number} params.carLoadingId - уникальный идентификатор подачи
   * @param {number} params.coalId - уникальный идентификатор сорта угля
   * @param {number} params.ash - зола
   * @param {number} params.heat - теплота
   * @param {number} params.moisture - влага
   * @param {boolean} params.isHighAsh - высокозольный
   * @param {number} params.equipmentId - уникальный идентификатор оборудования
   * @param {number} params.locomotiveId - уникальный идентификатор локомотива
   * @param {boolean} params.isHandled - обработан
   *
   * @returns {Promise<*>}
   */
  async createWork(sectionId, date, shift, orderEquipmentId, params) {
    const response = await HttpClient.post(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/works`,
      params,
    );
    return response.data;
  }

  /**
   * Обновление данных работы
   *
   * @param {number} id - уникальный идентификатор работы
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {string} date - дата
   * @param {number} shift - смена
   * @param {number} orderEquipmentId - уникальный идентификатор оборудования
   * @param {Object} params
   * @param {string} params.startingDatetime - дата и время начала работы
   * @param {string} params.endingDatetime - дата и время окончания работы
   * @param {string} params.description - описание
   * @param {number} params.value - пользовательское поле
   * @param {number} params.newWeight - новый вес
   * @param {number} params.carRide - рейсы или вагоны
   * @param {number} params.carLoadingId - уникальный идентификатор подачи
   * @param {number} params.coalId - уникальный идентификатор сорта угля
   * @param {number} params.ash - зола
   * @param {number} params.heat - теплота
   * @param {number} params.moisture - влага
   * @param {boolean} params.isHighAsh - высокозольный
   * @param {number} params.equipmentId - уникальный идентификатор оборудования
   * @param {number} params.locomotiveId - уникальный идентификатор локомотива
   * @param {boolean} params.isHandled - обработан
   *
   * @returns {Promise<*>}
   */
  async updateWork(sectionId, date, shift, orderEquipmentId, id, params) {
    const response = await HttpClient.put(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/works/${id}`,
      params,
    );
    return response.data;
  }

  /**
   * Обновление данных работы АСД
   *
   * @param {number} id - уникальный идентификатор работы
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {string} date - дата
   * @param {number} shift - смена
   * @param {number} orderEquipmentId - уникальный идентификатор оборудования
   * @param {Object} params
   * @param {number} params.workTypeId - уникальный идентификатор типа работы
   * @param {number} params.density - плотность
   *
   * @returns {Promise<*>}
   */
  async updateAsdWork(sectionId, date, shift, orderEquipmentId, id, params) {
    const response = await HttpClient.put(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/works/${id}:updateasd`,
      params,
    );
    return response.data;
  }

  /**
   * Удаление работы
   *
   * @param sectionId - участок
   * @param date - дата
   * @param shift - смена
   * @param orderEquipmentId - уникальный идентификатор оборудования
   * @param workId - уникальный идентификатор работы
   *
   * @returns {Promise<*>}
   */
  async removeWork(sectionId, date, shift, orderEquipmentId, workId) {
    const response = await HttpClient.delete(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/works/${workId}`,
    );
    return response.data;
  }

  /**
   * Создание работы
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {string} date - дата
   * @param {number} shift - смена
   * @param {number} orderEquipmentId - уникальный идентификатор оборудования
   * @param {number} workId - уникальный идентификатор работы
   * @param {Object} params
   * @param {string} params.firstPart - вес для первой работы
   *
   * @returns {Promise<*>}
   */
  async divideWork(sectionId, date, shift, orderEquipmentId, workId, params) {
    const response = await HttpClient.post(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/works/${workId}:divide`,
      params,
    );
    return response.data;
  }

  /**
   * Загрузка списка подач
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {date} - выбранная дата
   * @param shift {number} - смена
   *
   * @returns {Promise<*>} - Список подач
   */
  async getCarLoadingsBy(sectionId, date, shift) {
    const response = await HttpClient.get(
      `sections/${sectionId}/orders/${date}/${shift}/carloadings`,
    );
    return response.data;
  }

  /**
   * Создание подачи
   *
   * @param params.sectionId {number} - уникальный идентификатор участка
   * @param params.number {string} - номер подачи
   * @param params.loadingDatetime {date} - дата и время подачи
   * @param params.carsQuantity {number} - кол-во вагонов
   * @param params.description {string} - описание
   * @param params.isGres2 {boolean} - ГРЭС-2
   * @param params.textColorId {number} - уникальный идентификатор цвета текста
   * @param params.backgroundColorId {number} - уникальный идентификатор цвета фона
   *
   * @returns {Promise<*>} - Созданная подача
   */
  async createCarLoading(params) {
    const response = await HttpClient.post('carloadings', params);
    return response.data;
  }

  /**
   * Обновление подачи
   *
   * @param params.id {number} - уникальный идентификатор подачи
   * @param params.sectionId {number} - уникальный идентификатор участка
   * @param params.number {string} - номер подачи
   * @param params.loadingDatetime {date} - дата и время подачи
   * @param params.carsQuantity {number} - кол-во вагонов
   * @param params.description {string} - описание
   * @param params.isGres2 {boolean} - ГРЭС-2
   * @param params.unloadingDatetime {date} - дата и время отдачи
   * @param params.isUnloaded {boolean} - отдаём
   * @param params.textColorId {number} - уникальный идентификатор цвета текста
   * @param params.backgroundColorId {number} - уникальный идентификатор цвета фона
   *
   * @returns {Promise<*>} - Обновленная подача
   */
  async updateCarLoading(params) {
    const response = await HttpClient.put(`carloadings/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление подачи
   *
   * @param id {number} - уникальный идентификатор подачи
   *
   * @returns {Promise<*>}
   */
  async removeCarLoading(id) {
    const response = await HttpClient.delete(`carloadings/${id}`);
    return response.data;
  }

  /**
   * Удаление энергопростоя
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param electricalIdleId {number} - идентификатор удаляемого электропростоя
   * @returns {Promise<*>}
   */
  async removeElectricalIdle(date, shift, electricalIdleId) {
    const response = await HttpClient.delete(`electricalidles/${date}/${shift}/${electricalIdleId}`);
    return response.data;
  }

  /**
   * Обновление энергопростоя
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param electricalIdleId {number} - идентификатор обновляемого электропростоя
   * @param params
   * @param params.idleTypeId {number} - уникальный идентификатор типа простоя
   * @param params.electricalElementId {number} - уникальный идентификатор электрического элемента
   * @param params.malfunctionTypeId  {string} - уникальный идентификатор типа неисправности
   * @param params.description  {string} - описание
   * @param params.startingDatetime {string} - дата и время начала энергопростоя
   * @param params.endingDatetime {string} - дата и время окончания энергопростоя
   *
   * @returns {Promise<*>}
   */
  async updateElectricalIdle(date, shift, electricalIdleId, params) {
    const response = await HttpClient.put(`electricalidles/${date}/${shift}/${electricalIdleId}`,
      params,
    );
    return response.data;
  }

  /**
   * Групповое обновление энергопростоев
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param params
   * @param params.electricalIdleIds  {[number]} - идентификаторы электропростоев, которые нужно обновить
   * @param params.idleTypeId {number} - уникальный идентификатор типа простоя
   * @param params.malfunctionTypeId  {string} - уникальный идентификатор типа неисправности
   * @param params.description  {string} - описание
   * @param params.startingDatetime {string} - дата и время начала энергопростоя
   * @param params.endingDatetime {string} - дата и время окончания энергопростоя
   *
   * @returns {Promise<*>}
   */
  async groupedUpdateElectricalIdle(date, shift, params) {
    const response = await HttpClient.post(`electricalidles/${date}/${shift}/:groupedupdate`,
      params,
    );
    return response.data;
  }

  /**
   * Создание энергопростоя
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param params
   * @param params.equipmentId {number} - уникальный идентификатор оборудования
   * @param params.idleTypeId {number} - уникальный идентификатор типа простоя
   * @param params.malfunctionTypeId  {string} - уникальный идентификатор типа неисправности
   * @param params.description  {string} - описание
   * @param params.startingDatetime {string} - дата и время начала энергопростоя
   * @param params.endingDatetime {string} - дата и время окончания энергопростоя
   *
   * @returns {Promise<*>}
   */
  async createElectricalIdle(date, shift, params) {
    const response = await HttpClient.post(`electricalidles/${date}/${shift}`,
      params,
    );
    return response.data;
  }

  /**
   * Создание нескольких энергопростоев
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param params
   * @param params.equipmentIds {number} - уникальные идентификаторы оборудований
   * @param params.idleTypeId {number} - уникальный идентификатор типа простоя
   * @param params.malfunctionTypeId  {string} - уникальный идентификатор типа неисправности
   * @param params.description  {string} - описание
   * @param params.startingDatetime {string} - дата и время начала энергопростоя
   * @param params.endingDatetime {string} - дата и время окончания энергопростоя
   *
   * @returns {Promise<*>}
   */
  async groupedCreateElectricalIdle(date, shift, params) {
    const response = await HttpClient.post(`electricalidles/${date}/${shift}/:groupedcreate`,
      params,
    );
    return response.data;
  }

  /**
   * Загрузка списка энергопростоев
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param electricalElementId {number|undefined} - идентификатор электрического элемента для фильтра
   * @param equipmentId {number|undefined} - идентификатор горного оборудования для фильтра
   *
   * @returns {Promise<*>}
   */
  async getElectricalIdles(date, shift, electricalElementId, equipmentId) {
    const response = await HttpClient.get(`electricalidles/${date}/${shift}`, {
      params: {
        electricalElementId,
        equipmentId,
      },
    });
    return response.data;
  }

  /**
   * Загрузка энергопростоя по id
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param electricalIdleId {number} - уникальный идентификатор электрического простоя
   *
   * @returns {Promise<*>}
   */
  async getElectricalIdle(date, shift, electricalIdleId) {
    const response = await HttpClient.get(`electricalidles/${date}/${shift}/${electricalIdleId}`);

    return response.data;
  }

  /**
   * Загрузка простоя
   *
   * @param sectionId - уникальный идентификатор участка
   * @param date - дата
   * @param shift - смена
   * @param orderEquipmentId - уникальный идентификатор оборудования
   * @param idleId - уникальный идентификатор простоя
   *
   * @returns {Promise<*>}
   */
  async getIdle(sectionId, date, shift, orderEquipmentId, idleId) {
    const response = await HttpClient.get(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/idles/${idleId}`,
    );
    return response.data;
  }

  /**
   * Создание простоя
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {string} - дата
   * @param shift {string} - смена
   * @param orderEquipmentId {number} - уникальный идентификатор оборудования
   * @param params {Object}
   * @param params.startingDatetime {string} - дата и время начала работы
   * @param params.endingDatetime {string} - дата и время окончания работы
   * @param params.idleTypeId {number} - уникальный идентификатор типа простоя
   * @param params.description {string} - описание
   *
   * @returns {Promise<*>}
   */
  async createIdle(sectionId, date, shift, orderEquipmentId, params) {
    const response = await HttpClient.post(
      `sections/${sectionId}/orders/${date}/${shift}/orderEquipments/${orderEquipmentId}/idles`,
      params,
    );
    return response.data;
  }

  /**
   * Обновление данных простоя
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {string} - дата
   * @param shift {string} - смена
   * @param orderEquipmentId {number} - уникальный идентификатор оборудования
   * @param params {Object}
   * @param params.id {number} - уникальный идентификатор простоя
   * @param params.startingDatetime {string} - дата и время начала работы
   * @param params.endingDatetime {string} - дата и время окончания работы
   * @param params.idleTypeId {number} - уникальный идентификатор типа простоя
   * @param params.description {string} - описание
   *
   * @returns {Promise<*>}
   */
  async updateIdle(sectionId, date, shift, orderEquipmentId, params) {
    const response = await HttpClient.put(
      `sections/${sectionId}/orders/${date}/${shift}/orderEquipments/${orderEquipmentId}/idles/${params.id}`,
      params,
    );
    return response.data;
  }

  /**
   * Удаление простоя
   *
   * @param sectionId - участок
   * @param date - дата
   * @param shift - смена
   * @param orderEquipmentId - уникальный идентификатор оборудования
   * @param idleId - уникальный идентификатор простоя
   *
   * @returns {Promise<*>}
   */
  async removeIdle(sectionId, date, shift, orderEquipmentId, idleId) {
    const response = await HttpClient.delete(
      `sections/${sectionId}/orders/${date}/${shift}/orderEquipments/${orderEquipmentId}/idles/${idleId}`,
    );
    return response.data;
  }

  /**
   * Загрузка списка категорий работ
   *
   * @returns {Promise<*>}
   */
  async getWorkCategory() {
    const response = await HttpClient.get('workcategorys');
    return response.data;
  }

  /**
   * Создание новой категории работ
   *
   * @param params.name {string} - наименование
   * @param params.type {number} - тип (Common/const.js -> TypesOfMining)
   * @param params.explanation {string} - пояснение
   * @param params.unitId {number} - идентификатор единицы измерения
   * @param params.workCategoryGroupId {number} - идентификатор группы категории работ
   * @param params.number {number} - номер
   *
   * @returns {Promise<*>}
   */
  async createWorkCategory(params) {
    const response = await HttpClient.post('workcategorys', params);
    return response.data;
  }

  /**
   * Обновление категории работ
   *
   * @param params.id {number} - уникальный идентификатор
   * @param params.name {string} - наименование
   * @param params.type {number} - тип (Common/const.js -> TypesOfMining)
   * @param params.explanation {string} - пояснение
   * @param params.unitId {number} - идентификатор единицы измерения
   * @param params.workCategoryGroupId {number} - идентификатор группы категории работ
   * @param params.number {number} - номер
   *
   * @returns {Promise<*>}
   */
  async updateWorkCategory(params) {
    const response = await HttpClient.put(`workcategorys/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление категории работ
   *
   * @param id {number} - уникальный идентификатор
   *
   * @returns {Promise<*>}
   */
  async removeWorkCategory(id) {
    const response = await HttpClient.delete(`workcategorys/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка групп категорий работ
   *
   * @returns {Promise<*>}
   */
  async getWorkCategoryGroups() {
    const response = await HttpClient.get('workcategorygroups');
    return response.data;
  }

  /**
   * Создание новой группы категорий работ
   *
   * @param params.name {string} - наименование
   * @param params.unitId {number} - уникальный идентификатор единицы измерения
   *
   * @returns {Promise<*>}
   */
  async createWorkCategoryGroup(params) {
    const response = await HttpClient.post('workcategorygroups', params);
    return response.data;
  }

  /**
   * Обновление группы категорий работ
   *
   * @param params.id {number} - уникальный идентификатор
   * @param params.name {string} - наименование
   * @param params.unitId {number} - уникальный идентификатор единицы измерения
   *
   * @returns {Promise<*>}
   */
  async updateWorkCategoryGroup(params) {
    const response = await HttpClient.put(`workcategorygroups/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление категории работ
   *
   * @param id {number} - уникальный идентификатор
   *
   * @returns {Promise<Void>}
   */
  async removeWorkCategoryGroup(id) {
    const response = await HttpClient.delete(`workcategorygroups/${id}`);
    return response.data;
  }

  /**
   * Загрузка планового простоя
   *
   * @param year {number} - год
   * @param month {number} - месяц
   *
   * @returns {Promise<*>}
   */
  async getPlannedIdle(year, month) {
    const response = await HttpClient.get(
      `plannedIdles/${year}/${month}`,
    );
    return response.data;
  }

  /**
   * Создание планового простоя
   *
   * @param year {number} - год
   * @param month {number} - месяц
   *
   * @returns {Promise<*>}
   */
  async createPlannedIdle(year, month) {
    const response = await HttpClient.post(
      'plannedIdles',
      { year, month },
    );
    return response.data;
  }

  /**
   * Создание планового простоя оборудования
   *
   * @param year {number} - год
   * @param month {number} - месяц
   * @param params {Object}
   * @param params.equipmentId {number}
   * @param params.type {number} - 0, 1, 2
   * @param params.plannedIdleEquipmentDays {Array}
   * @returns {Promise<*>}
   */
  async createPlannedIdleEquipment(year, month, params) {
    const response = await HttpClient.post(
      `plannedIdles/${year}/${month}/plannedIdleEquipments`,
      params,
    );
    return response.data;
  }

  /**
   * Обновление планового простоя оборудования
   *
   * @param year {number} - год
   * @param month {number} - месяц
   * @param id {number} - идентификатор
   * @param params {Object}
   * @param params.equipmentId {number}
   * @param params.type {number} - 0, 1, 2
   * @param params.plannedIdleEquipmentDays {Array}
   * @returns {Promise<*>}
   */
  async updatePlannedIdleEquipment(year, month, id, params) {
    const response = await HttpClient.put(
      `plannedIdles/${year}/${month}/plannedIdleEquipments/${id}`,
      params,
    );
    return response.data;
  }

  /**
   * Удаление планового простоя оборудования
   *
   * @param year {number} - год
   * @param month {number} - месяц
   * @param id {number} - уникальный идентификатор
   * @returns {Promise<*>}
   */
  async removePlannedIdleEquipment(year, month, id) {
    const response = await HttpClient.delete(
      `plannedIdles/${year}/${month}/plannedIdleEquipments/${id}`,
    );
    return response.data;
  }

  /**
   * Получение плановых простоев для конкретного оборудования
   *
   * @param year {number} - год
   * @param month {number} - месяц
   * @param params
   * @param params.equipmentId {number} - уникальный идентификатор оборудования
   * @returns {Promise<*>}
   */
  async getPlannedIdleEquipment(year, month, params) {
    const response = await HttpClient.get(
      `plannedIdles/${year}/${month}/plannedIdleEquipments`,
      { params },
    );
    return response.data;
  }

  /**
   * Загрузка планограммы
   *
   * @param year {number} - год
   * @param month {number} - месяц
   *
   * @returns {Promise<*>}
   */
  async getPlanogram(year, month) {
    const response = await HttpClient.get(
      `planograms/${year}/${month}`,
    );
    return response.data;
  }

  /**
   * Создание планограммы
   *
   * @param params.year {number} - год
   * @param params.month {number} - месяц
   *
   * @returns {Promise<*>}
   */
  async createPlanogram(params) {
    const response = await HttpClient.post(
      'planograms',
      params,
    );
    return response.data;
  }

  /**
   * Загрузка оборудования планограммы
   *
   * @param params.year {number} - год
   * @param params.month {number} - месяц
   * @param params.planogramEquipmentId {number} - уникальный идентификатор оборудования планограммы
   *
   * @returns {Promise<*>}
   */
  async getPlanogramEquipment(params) {
    const response = await HttpClient.get(
      `planograms/${params.year}/${params.month}/planogramequipments/${params.planogramEquipmentId}`,
    );
    return response.data;
  }

  /**
   * Создание оборудования планограммы
   *
   * @param params.year {number} - год
   * @param params.month {number} - месяц
   * @param params.item {object} - оборудование планограммы
   *
   * @returns {Promise<*>}
   */
  async createPlanogramEquipment(params) {
    const response = await HttpClient.post(
      `planograms/${params.year}/${params.month}/planogramequipments`,
      params.item,
    );
    return response.data;
  }

  /**
   * Обновление оборудования планограммы
   *
   * @param params.year {number} - год
   * @param params.month {number} - месяц
   * @param params.item {object} - оборудование планограммы
   *
   * @returns {Promise<*>}
   */
  async updatePlanogramEquipment(params) {
    const response = await HttpClient.put(
      `planograms/${params.year}/${params.month}/planogramequipments/${params.item.id}`,
      params.item,
    );
    return response.data;
  }

  /**
   * Удаление оборудования планограммы
   *
   * @param params.year {number} - год
   * @param params.month {number} - месяц
   * @param params.planogramEquipmentId {number} - уникальный идентификатор оборудования планограммы
   *
   * @returns {Promise<*>}
   */
  async removePlanogramEquipment(params) {
    const response = await HttpClient.delete(
      `planograms/${params.year}/${params.month}/planogramequipments/${params.planogramEquipmentId}`,
    );
    return response.data;
  }

  /**
   * Загрузка плановых показателей машин на год
   *
   * @param year {number} - год
   *
   * @returns {Promise<*>}
   */
  async getPlannedMachinePerformance(year) {
    const response = await HttpClient.get(
      `plannedmachineperformances/${year}`,
    );
    return response.data;
  }

  /**
   * Создание плановых показателей машин на год
   *
   * @param year {number} - год
   *
   * @returns {Promise<*>}
   */
  async createPlannedMachinePerformance(year) {
    const response = await HttpClient.post(
      'plannedmachineperformances',
      { year },
    );
    return response.data;
  }

  /**
   * Создание плановых показателей машины
   *
   * @param year {number} - год
   * @param item {object} - плановые показатели машины
   *
   * @returns {Promise<*>}
   */
  async createPlannedMachinePerformanceEquipment(year, item) {
    const response = await HttpClient.post(
      `plannedmachineperformances/${year}/plannedmachineperformanceequipments`,
      item,
    );
    return response.data;
  }

  /**
   * Обновление плановых показателей машины
   *
   * @param year {number} - год
   * @param id {object} - индетфиикатор плановых показателей машины
   * @param item {object} - плановые показатели машины
   *
   * @returns {Promise<*>}
   */
  async updatePlannedMachinePerformanceEquipment(year, id, item) {
    const response = await HttpClient.put(
      `plannedmachineperformances/${year}/plannedmachineperformanceequipments/${id}`,
      item,
    );
    return response.data;
  }

  /**
   * Удаление плановых показателей машины
   *
   * @param year {number} - год
   * @param id {number} - уникальный идентификатор плановых показателей машины
   *
   * @returns {Promise<*>}
   */
  async deletePlannedMachinePerformanceEquipment(year, id) {
    const response = await HttpClient.delete(
      `plannedmachineperformances/${year}/plannedmachineperformanceequipments/${id}`,
    );
    return response.data;
  }

  /**
   * Загрузка настроек
   *
   * @returns {Promise<*>}
   */
  async getSettings() {
    const response = await HttpClient.get('settings');
    return response.data;
  }

  /**
   * Изменение настроек
   *
   * @param {number} params.ash - зола
   * @param {number} params.heat - теплота
   * @param {number} params.moisture - влага
   * @param {number} params.overburdenVolume - объем вскрыши
   * @param {number} params.overburdenRatio - коэффициент автовскрыши
   * @param {string} params.deliveryTime - сдаточное время
   * @param {boolean} params.exitConfirmation - задавать вопрос при выходе
   * @param {string} params.organizationName - наименование предприятия
   * @param {string} params.organizationFullName - полное наименование предприятия
   * @param {number} params.defaultCoalTypeId - идентификатор сорта угля по умолчанию
   * @param {string} params.closingOperationTime - продолжительность подготовительно-заключительных операций (ПЗО)
   * @param {string} params.telegramDefaultDuration - продожительность телеграммы по умолчанию
   * @param {string} params.minDurationIdleFromAsd - минимальная продолжительность простоя/работы с АСД Автографа
   * @param {number} params.workTypeForShiftAcceptanceId - идентификатор вида работы для приема смены
   * @param {number} params.workTypeForTelegramId - идентификатор вида работы для телеграммы
   * @param {number} params.workTypeForLoaderFromAsdId - идентификатор вида работы для погрузчика с АСД Автограф
   * @param {number} params.timeLineBackgroundColorId  - идентификатор цвета фона для TimeLine
   * @param {number} params.appBackgroundColorId - идентификатор цвета фона приложения
   * @param {number} params.WorkTypeForLocomotiveInMiningSectionId - вид работы для локомотивов для участка Добыча
   * @param {number} params.workTypeForLocomotiveInOverburdenSection - вид работы для локомотивов для участка Вскрыша
   * @param {string} params.minIdlesDurationFromAsdForSap - минимальная продолжительность простоев с АСД Автограф для SAP
   * @param {number} params.equipmentForDefaultLoader - идентификатор погрузчика по умолчанию
   *
   * @returns {Promise<*>}
   */
  async updateSettings(params) {
    const response = await HttpClient.put('settings', params);
    return response.data;
  }

  /**
   * Загрузка списка типов электрических элементов
   *
   * @returns {Promise<*>} - Список типов электрических элементов
   */
  async getElectricalElementTypes() {
    const response = await HttpClient.get('electricalelementtypes');
    return response.data;
  }

  /**
   * Создание типа электрического элемента
   *
   * @param params.name {string} - наименование типа электрического элемента
   *
   * @returns {Promise<*>} - Созданный тип электрического элемента
   */
  async createElectricalElementType(params) {
    const response = await HttpClient.post('electricalelementtypes', params);
    return response.data;
  }

  /**
   * Обновление данных типа электрического элемента
   *
   * @param params.id {number} - уникальный идентификатор типа электрического элемента
   * @param params.name {string} - наименование типа электрического элемента
   *
   * @returns {Promise<*>} - Обновленный тип электрического элемента
   */
  async updateElectricalElementType(params) {
    const response = await HttpClient.put(`electricalelementtypes/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление типа электрического элемента
   *
   * @param id {number} - уникальный идентификатор типа электрического элемента
   *
   * @returns {Promise<*>}
   */
  async removeElectricalElementType(id) {
    const response = await HttpClient.delete(`electricalelementtypes/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка электрических элементов
   *
   * @returns {Promise<*>} - Список электрических элементов
   */
  async getElectricalElements() {
    const response = await HttpClient.get('electricalelements');
    return response.data;
  }

  /**
   * Создание электрического элемента
   *
   * @param params.name {string} - наименование электрического элемента
   *
   * @returns {Promise<*>} - Созданный электрический элемента
   */
  async createElectricalElement(params) {
    const response = await HttpClient.post('electricalelements', params);
    return response.data;
  }

  /**
   * Обновление данных электрического элемента
   *
   * @param params.id {number} - уникальный идентификатор электрического элемента
   * @param params.name {string} - наименование электрического элемента
   *
   * @returns {Promise<*>} - Обновленный электрический элемент
   */
  async updateElectricalElement(params) {
    const response = await HttpClient.put(`electricalelements/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление электрического элемента
   *
   * @param id {number} - уникальный идентификатор электрического элемента
   *
   * @returns {Promise<*>}
   */
  async removeElectricalElement(id) {
    const response = await HttpClient.delete(`electricalelements/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка лайт связей электрических элементов
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   *
   * @returns {Promise<*>} - Список лайт связей электрических элементов
   */
  async getLiteElectricalElementNodes(date, shift) {
    const response = await HttpClient.get(`liteelectricalelementnodes/${date}/${shift}`);
    return response.data;
  }

  /**
   * Создание лайт связи электрического элемента
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param params
   * @param params.electricalElementId {number} - идентификатор электрического элемента
   * @param params.parentNodeId {number} - идентификатор лайт связи электрического элемента родителя
   *
   * @returns {Promise<*>} - Созданная лайт связь электрического элемента
   */
  async createLiteElectricalElementNode(date, shift, params) {
    const response = await HttpClient.post('liteelectricalelementnodes', { ...params, date, shift });
    return response.data;
  }

  /**
   * Обновление данных лайт связи электрического элемента
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param params
   * @param params.id {number} - идентификатор обновляемой лайт связи
   * @param params.electricalElementId {number} - идентификатор электрического элемента
   * @param params.parentNodeId {number} - идентификатор лайт связи электрического элемента родителя
   *
   * @returns {Promise<*>} - Обновленная лайт связь электрического элемента
   */
  async updateLiteElectricalElementNode(date, shift, params) {
    const response = await HttpClient.put(`liteelectricalelementnodes/${date}/${shift}/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление лайт связи электрического элемента
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param id {number} - идентификатор удаляемой связи
   *
   * @returns {Promise<Void>}
   */
  async removeLiteElectricalElementNode(date, shift, id) {
    const response = await HttpClient.delete(`liteelectricalelementnodes/${date}/${shift}/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка связей электрических элементов
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   *
   * @returns {Promise<*>} - Список связей электрических элементов
   */
  async getElectricalElementNodes(date, shift) {
    const params = { isRoot: true };
    const response = await HttpClient.get(`electricalelementnodes/${date}/${shift}`, { params });
    return response.data;
  }

  /**
   * Отключение электрического элемента и его дочерних элементов
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param electricalElementNodeId  {number} - идентификатор электрического элемента
   * @param params
   * @param params.startingDatetime  {string} - дата и время отключения
   * @param params.malfunctionTypeId  {number} - уникальный идентификатор типа неисправности
   * @param params.idleTypeId  {number} - уникальный идентификатор типа простоя
   * @param params.description  {string} - комментарий
   *
   * @returns {Promise<*>} - Связи электрического элемента
   */
  async turnOff(date, shift, electricalElementNodeId, params) {
    const response = await HttpClient.post(
      `electricalelementnodes/${date}/${shift}/${electricalElementNodeId}:setonidlestatus`,
      params,
    );
    return response.data;
  }

  /**
   * Прикрепление горного оборудования к электрическому элементу в дереве
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param params
   * @param params.electricalElementNodeId {number} - идентификатор узла эл. элемента в дереве
   * @param params.equipmentId {number} - идентификатор оборудования
   *
   * @returns {Promise<*>} - Обновленная связь электрического элемента
   */
  async attachEquipmentToElectricalElementNode(date, shift, params) {
    const response = await HttpClient.post(
      `electricalelementnodes/${date}/${shift}/${params.electricalElementNodeId}:attachequipment`,
      params,
    );
    return response.data;
  }

  /**
   * Открепление горного оборудования от электрического элемента в дереве
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param electricalElementNodeId {number} - идентификатор узла эл. элемента в дереве
   * @param params {object}
   * @param params.equipmentId {number} - уникальный идентификатор оборудования для открепления
   *
   * @returns {Promise<*>} - Обновленная связь электрического элемента
   */
  async detachEquipmentFromElectricalElementNode(date, shift, electricalElementNodeId, params) {
    const response = await HttpClient.post(
      `electricalelementnodes/${date}/${shift}/${electricalElementNodeId}:detachequipment`,
      params
    );
    return response.data;
  }

  /**
   * Перепривязка горного оборудования от электрического элемента в дереве к другому
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param fromElectricalElementNodeId {number} - идентификатор узла эл. элемента в дереве, от которого отвязываем
   * @param toElectricalElementNodeId {number} - идентификатор узла эл. элемента в дереве, к какому привязываем
   *
   * @returns {Promise<*>} - Обновленная связь электрического элемента
   */
  async reattachEquipmentToElectricalElementNode(date, shift, fromElectricalElementNodeId, toElectricalElementNodeId) {
    const response = await HttpClient.post(
      `electricalelementnodes/${date}/${shift}/${fromElectricalElementNodeId}:moveequipmentasync`,
      { toElectricalElementNodeId }
    );
    return response.data;
  }

  /**
   * Создание связей электрических элементов на основе предыдущей смены
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   *
   * @returns {Promise<*>} - Список связей электрических элементов
   */
  async createAllElectricalElementNodesByPrevious(date, shift) {
    const response = await HttpClient.post(
      `electricalelementnodes/${date}/${shift}:createallbyprevious`,
      null,
      { params: { isRoot: true } },
    );
    return response.data;
  }

  /**
   * Актуализация дерева на основе предыдущей смены
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   *
   * @returns {Promise<*>} - Список связей электрических элементов
   */
  async actualizeBypPrevious(date, shift) {
    const response = await HttpClient.post(`electricalelementnodes/${date}/${shift}:actualizebyprevious`);
    return response.data;
  }

  /**
   * Загрузка плановых показателей общие
   *
   * @param year {number} - год
   *
   * @returns {Promise<*>} - Плановые показатели общие
   */
  async getPlannedGeneralIndicator(year) {
    const response = await HttpClient.get(`plannedgeneralindicators/${year}`);
    return response.data;
  }

  /**
   * Создание плановых показателей общие
   *
   * @param year {number} - год
   *
   * @returns {Promise<*>}
   */
  async createPlannedGeneralIndicators(year) {
    const response = await HttpClient.post(
      'plannedgeneralindicators',
      { year },
    );
    return response.data;
  }

  /**
   * Загрузка элемента плановых показателей общие
   *
   * @param year {number} - год
   * @param id {number} - идентификатор элемента
   *
   * @returns {Promise<*>} - Элемент пановых показателей общие
   */
  async getPlannedGeneralIndicatorItem(year, id) {
    const url = `plannedgeneralindicators/${year}/plannedgeneralindicatoritems/${id}`;
    const response = await HttpClient.get(url);
    return response.data;
  }

  /**
   * Обновление элемента плановых показателей общие
   *
   * @param year {number} - год
   * @param id {number} - идентификатор элемента
   * @param plannedGeneralIndicatorItem
   * @param plannedGeneralIndicatorItem.plannedGeneralIndicatorItemMonths {array} - плановые показатели общие по месяцам
   *
   * @returns {Promise<*>} - Элемент пановых показателей общие
   */
  async updatePlannedGeneralIndicatorItem(year, id, plannedGeneralIndicatorItem) {
    const url = `plannedgeneralindicators/${year}/plannedgeneralindicatoritems/${id}`;
    const { plannedGeneralIndicatorItemMonths } = plannedGeneralIndicatorItem;

    const response = await HttpClient.put(url, { plannedGeneralIndicatorItemMonths });

    return response.data;
  }

  /**
   * Скачивание отчета итоги машин
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.sectionId {number} - идентификатор Участка
   * @param params.period {number} - период
   * @param params.date {string} - дата
   * @param params.shift {number} - смена
   * @param params.fileFormat {number} - формат скачиваемого отчета
   *
   * @returns {Promise<*>}
   */
  async downloadReportResultCars(reportName, params) {
    await HttpClient.get('downloads/reportresultcars/',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Скачивание отчета "Экспорт простоев в Парус"
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.sectionIds {[number]} - идентификаторы участков
   * @param params.dateFrom {string} - дата начала периода
   * @param params.dateTo {string} - дата окончания периода
   *
   * @returns {Promise<*>}
   */
  async downloadReportExportIdlesToParus(reportName, params) {
    await HttpClient.post('exportparus/:exportidles',
      params, { responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Скачивание отчета "Экспорт работ в Парус"
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.sectionIds {[number]} - идентификаторы участков
   * @param params.dateFrom {string} - дата начала периода
   * @param params.dateTo {string} - дата окончания периода
   *
   * @returns {Promise<*>}
   */
  async downloadReportExportWorksToParus(reportName, params) {
    await HttpClient.post('exportparus/:exportworks',
      params, { responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Скачивание отчета обработка вагонов
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.DateFrom {string} - дата начала периода
   * @param params.DateTo {string} - дата окончания периода
   * @param params.FileFormat {number} - формат скачиваемого отчета
   *
   * @returns {Promise<*>}
   */
  async downloadReportHandledCars(reportName, params) {
    await HttpClient.get('downloads/reporthandledcars/',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Загрузка списка групп оборудования
   *
   * @returns {Promise<*>} - Список групп
   */
  async getOrderEquipmentGroups() {
    const response = await HttpClient.get('orderequipmentgroups');
    return response.data;
  }

  /**
   * Создание группы оборудования
   *
   * @param params.number {number} - номер группы
   * @param params.colorId {number} - уникальный идентификатор цвета
   *
   * @returns {Promise<*>} - созданная группа
   */
  async createOrderEquipmentGroup(params) {
    const response = await HttpClient.post('orderequipmentgroups', params);
    return response.data;
  }

  /**
   * Обновление группы оборудования
   *
   * @param params.id {number} - уникальный идентификатор группы
   * @param params.number {number} - номер группы
   * @param params.colorId {number} - уникальный идентификатор цвета
   *
   * @returns {Promise<*>} - обновленная группа
   */
  async updateOrderEquipmentGroup(params) {
    const response = await HttpClient.put(`orderequipmentgroups/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление группы оборудования
   *
   * @param id {number} - уникальный идентификатор группы
   *
   * @returns {Promise<void>}
   */
  async removeOrderEquipmentGroup(id) {
    const response = await HttpClient.delete(`orderequipmentgroups/${id}`);
    return response.data;
  }

  /**
   * Загрузка списка локомотиво-составов
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {string} - дата
   * @param shift {number} - смена
   *
   * @returns {Promise<*>}
   */
  async getLocomotiveTrains(sectionId, date, shift) {
    const response = await HttpClient.get(`sections/${sectionId}/orders/${date}/${shift}/locomotivetrains`);
    return response.data;
  }

  /**
   * Создание локомотиво-состава
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param item {object} - локомотиво-состав
   *
   * @returns {Promise<*>}
   */
  async createLocomotiveTrain(sectionId, date, shift, item) {
    const response = await HttpClient.post(
      `sections/${sectionId}/orders/${date}/${shift}/locomotivetrains`,
      item,
    );
    return response.data;
  }

  /**
   * Обновление локомотиво-состава
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param item {object} - локомотиво-состав
   *
   * @returns {Promise<*>}
   */
  async updateLocomotiveTrain(sectionId, date, shift, item) {
    const response = await HttpClient.put(
      `sections/${sectionId}/orders/${date}/${shift}/locomotivetrains/${item.id}`,
      item,
    );
    return response.data;
  }

  /**
   * Удаление локомотиво-состава
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param locomotiveTrainId {number} - уникальный идентификатор локомотиво-состава
   *
   * @returns {Promise<void>}
   */
  async removeLocomotiveTrain(sectionId, date, shift, locomotiveTrainId) {
    const response = await HttpClient.delete(
      `sections/${sectionId}/orders/${date}/${shift}/locomotivetrains/${locomotiveTrainId}`,
    );
    return response.data;
  }

  /**
   * Загрузка пользовательских ролей
   *
   * @returns {Promise<*>} - Пользовательские роли
   */
  async getUserRoles() {
    const response = await HttpClient.get('userroles');
    return response.data;
  }

  /**
   * Создание пользовательской роли
   *
   * @param params.name {string} - название роли
   * @param params.permissions {Array<number>} - пользовательские права
   *
   * @returns {Promise<*>} - Созданная роль
   */
  async createUserRole(params) {
    const response = await HttpClient.post('userroles', params);
    return response.data;
  }

  /**
   * Обновление пользовательской роли
   *
   * @param params.id {number} - уникальный идентификатор роли
   * @param params.name {string} - название роли
   * @param params.permissions {Array<number>} - пользовательские права
   *
   * @returns {Promise<*>} - Обновленная роль
   */
  async updateUserRole(params) {
    const response = await HttpClient.put(`userroles/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление пользовательской роли
   *
   * @param id {number} - уникальный идентификатор роли
   *
   * @returns {Promise<void>}
   */
  async removeUserRole(id) {
    const response = await HttpClient.delete(`userroles/${id}`);
    return response.data;
  }

  /**
   * Загрузка профиля
   *
   * @returns {Promise<*>} - Профиль
   */
  async getProfile() {
    const response = await HttpClient.get('profile');
    return response.data;
  }

  /**
   * Удаление телеграммы
   *
   * @param sectionId {number} - участок
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param orderEquipmentId {number}- уникальный идентификатор оборудования
   * @param telegramId {number} - уникальный идентификатор телеграммы
   *
   * @returns {Promise<Void>}
   */
  async removeTelegram(sectionId, date, shift, orderEquipmentId, telegramId) {
    const response = await HttpClient.delete(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/telegrams/${telegramId}`,
    );
    return response.data;
  }

  /**
   * Загрузка телеграммы
   *
   * @param sectionId {number} - участок
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param orderEquipmentId {number}- уникальный идентификатор оборудования
   * @param telegramId {number} - уникальный идентификатор телеграммы
   *
   * @returns {Promise<*>} - Телеграмма
   */
  async getTelegram(sectionId, date, shift, orderEquipmentId, telegramId) {
    const response = await HttpClient.get(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/telegrams/${telegramId}`,
    );
    return response.data;
  }

  /**
   * Обновление телеграммы
   *
   * @param sectionId {number} - участок
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param orderEquipmentId {number}- уникальный идентификатор оборудования
   * @param telegramId {number} - уникальный идентификатор телеграммы
   * @param params {Telegram} - данные для обновления телеграммы
   *
   * @returns {Promise<*>} - Обновленная телеграмма
   */
  async updateTelegram(sectionId, date, shift, orderEquipmentId, telegramId, params) {
    const response = await HttpClient.put(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/telegrams/${telegramId}`,
      params,
    );
    return response.data;
  }

  /**
   * Привязка телеграммы к подаче
   *
   * @param sectionId - участок
   * @param date - дата
   * @param shift - смена
   * @param orderEquipmentId - уникальный идентификатор оборудования
   * @param telegramId - уникальный идентификатор телеграммы
   * @param carLoadingId - уникальный идентификатор подачи
   *
   * @returns {Promise<*>} - Обновленная телеграмма
   */
  async attachTelegramToCarLoading(sectionId, date, shift, orderEquipmentId, telegramId, carLoadingId) {
    const response = await HttpClient.post(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/telegrams/${telegramId}:attachcarloading`,
      { carLoadingId },
    );
    return response.data;
  }

  /**
   * Загрузка актуальных показателей угля
   *
   * @param date {string} - дата
   * @param shift {number} - смена
   * @param equipmentId {number} - уникальный идентификатор оборудования
   * @param sectionId {number} - уникальный идентификатор участка
   *
   * @returns {Promise<*>}
   */
  async getOrderEquipmentCharacteristics(date, shift, equipmentId, sectionId) {
    const params = { date, shift, sectionId };
    const response = await HttpClient.get(
      `orderequipmentcharacteristics/equipments/${equipmentId}:getpreviouscharacteristics`,
      { params },
    );
    return response.data;
  }

  /**
   * Загрузка настроек общих плановых показателей
   *
   * @returns {Promise<*>}
   */
  async getPlannedGeneralIndicatorSettings() {
    const response = await HttpClient.get('settingsplannedgeneralindicators');
    return response.data;
  }

  /**
   * Создание настроек общих плановых показателей
   *
   * @param params.name {string} - наименование
   * @param params.unitId {number} - уникальный идентификатор ед. изм.
   * @param params.workCategoryIds {Array<number>} - уникальные идентификаторы категорий работ
   * @param params.excludedEquipmentIds {Array<number>} - уникальные идентификаторы исключенного ГО
   * @param params.bedIds {Array<number>} - уникальные идентификаторы пластов
   * @param params.includedEquipments {Array<number>} - уникальные идентификаторы включенного ГО
   *
   * @returns {Promise<*>}
   */
  async createPlannedGeneralIndicatorSettings(params) {
    const response = await HttpClient.post('settingsplannedgeneralindicators', params);
    return response.data;
  }

  /**
   * Обновление настроек общих плановых показателей
   *
   * @param params.id {number} - уникальный идентификатор настроек
   * @param params.name {string} - наименование
   * @param params.unitId {number} - уникальный идентификатор ед. изм.
   * @param params.workCategoryIds {Array<number>} - уникальные идентификаторы категорий работ
   * @param params.excludedEquipmentIds {Array<number>} - уникальные идентификаторы исключенного ГО
   * @param params.bedIds {Array<number>} - уникальные идентификаторы пластов
   * @param params.includedEquipments {Array<number>} - уникальные идентификаторы включенного ГО
   *
   * @returns {Promise<*>}
   */
  async updatePlannedGeneralIndicatorSettings(params) {
    const response = await HttpClient.put(`settingsplannedgeneralindicators/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление настроек общих плановых показателей
   *
   * @param id {number} - уникальный идентификатор настроек
   *
   * @returns {Promise<void>}
   */
  async removePlannedGeneralIndicatorSettings(id) {
    const response = await HttpClient.delete(`settingsplannedgeneralindicators/${id}`);
    return response.data;
  }

  /**
   * Получение сотрудников по группам должностей или всех, если группы должностей не передаются
   *
   * params.positionGroupTypes {Array<number>>} - уникальные идентификаторы типов групп должностей
   * params.page {number} - страница пагинации
   * params.search {string} - строка для поиска сотрудников
   *
   * @returns {Promise<*>}
   */
  async getEmployees(params) {
    const response = await HttpClient.get('employees', { params });
    return response.data;
  }

  /**
   * Получение всех должностей
   *
   * @returns {Promise<*>}
   */
  async getPositions() {
    const response = await HttpClient.get('positions');
    return response.data;
  }

  /**
   * Получение всех групп должностей
   *
   * @returns {Promise<*>}
   */async getPositionGroups() {
    const response = await HttpClient.get('positiongroups');
    return response.data;
  }

  /**
   * Обновление группы должностей
   *
   * @param params.id {number} - уникальный идентификатор группы должностей
   * @param params.employeeIds {Array<number>} - уникальные идентификаторы сотрудников
   * @param params.positionIds {Array<number>} - уникальные идентификаторы должностей
   *
   * @returns {Promise<*>} - список отредактированных должностей
   */
  async updatePositionGroup(params) {
    const response = await HttpClient.put(`positiongroups/${params.id}`, params);
    return response.data;
  }

  /**
   * Синхронизация пользователей и должностей
   *
   * @returns {Promise<*>}
   */
  async synchronizationOfEmployeesAndPositions() {
    const response = await HttpClient.post('employees/:syncwithekp');
    return response.data;
  }

  /**
   * Получение всех видов оборудования
   *
   * @returns {Promise<*>}
   */
  async getEquipmentTypes() {
    const response = await HttpClient.get('equipmenttypes');
    return response.data;
  }

  /**
   * Создание вида оборудования
   *
   * @param {string} params.name - наименование
   * @param {string} params.parusCode - код в Парус
   * @param {boolean} params.isAutoTransport - относится к автотранспорту
   * @param {boolean} params.isElectricTransport - относится к электрооборудованию
   * @param {boolean} params.isIncludeInIdleReports - включать в отчеты "Простои", "Экспорт в Парус. Простои"
   *
   * @returns {Promise<*>}
   */
  async createEquipmentType(params) {
    const response = await HttpClient.post('equipmenttypes', params);
    return response.data;
  }

  /**
   * Обновление вида оборудования
   *
   * @param {number} params.id - уникальный идентификатор вида оборудования
   * @param {string} params.name - наименование
   * @param {string} params.parusCode - код в Парус
   * @param {boolean} params.isIncludeInIdleReports - включать в отчеты "Простои", "Экспорт в Парус. Простои"
   *
   * @returns {Promise<*>} - отредактированное оборудование
   */
  async updateEquipmentType(params) {
    const response = await HttpClient.put(`equipmenttypes/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление вида оборудования
   *
   * @param id {number} - уникальный идентификатор вида оборудования
   *
   * @returns {Promise<*>}
   */
  async removeEquipmentType(id) {
    const response = await HttpClient.delete(`equipmenttypes/${id}`);
    return response.data;
  }

  /**
   * Скачивание отчета "Отчет для механиков. Простои."
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.sectionIds {[number]} - идентификаторы участков
   * @param params.dateFrom {string} - дата начала периода
   * @param params.dateTo {string} - дата окончания периода
   *
   * @returns {Promise<*>}
   */
  async downloadReportForMechanicsIdles(reportName, params) {
    await HttpClient.post('reportformechanics/:idlesreport',
      params, { responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Скачивание отчета "Отчет для механиков. Работы."
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.sectionIds {[number]} - идентификаторы участков
   * @param params.dateFrom {string} - дата начала периода
   * @param params.dateTo {string} - дата окончания периода
   *
   * @returns {Promise<*>}
   */
  async downloadReportForMechanicsWorks(reportName, params) {
    await HttpClient.post('reportformechanics/:worksreport',
      params, { responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Скачивание отчета "Отчет по простоям"
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.dateFrom {string} - дата начала периода
   * @param params.dateTo {string} - дата окончания периода
   *
   * @returns {Promise<*>}
   */
  async downloadReportIdles(reportName, params) {
    await HttpClient.get('reportidles',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Получение настроек отчета простои
   *
   * @returns {Promise<*>}
   */
  async getSettingsReportIdles() {
    const response = await HttpClient.get('settingsreportidles');
    return response.data;
  }

  /**
   * Обновление настроек отчета простои
   *
   * @param params.id {number} - уникальный идентификатор настройки отчета простоя
   * @param params.idleTypeIds {[number]} - уникальные идентификаторы типов простоев
   *
   * @returns {Promise<*>}
   */
  async updateSettingsReportIdle(params) {
    const response = await HttpClient.put(`settingsreportidles/${params.id}`, params);
    return response.data;
  }

  /**
   * Получение настроек отчета 2БПКО
   *
   * @returns {Promise<*>}
   */
  async getSettingsReportBpko() {
    const response = await HttpClient.get('settingsreportbpkos');
    return response.data;
  }

  /**
   * Создание настройки отчета 2БПКО
   *
   * @param params {object}
   *
   * @returns {Promise<*>}
   */
  async createSettingsReportBpko(params) {
    const response = await HttpClient.post('settingsreportbpkos', params);
    return response.data;
  }

  /**
   * Обновление настроек отчета 2БПКО
   *
   * @param params.id {number} - уникальный идентификатор настройки отчета 2БПКО
   *
   * @returns {Promise<*>}
   */
  async updateSettingsReportBpko(params) {
    const response = await HttpClient.put(`settingsreportbpkos/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление настройки отчета 2БПКО
   *
   * @param id {number} - уникальный идентификатор настройки
   *
   * @returns {Promise<*>}
   */
  async removeSettingsReportBpko(id) {
    const response = await HttpClient.delete(`settingsreportbpkos/${id}`);
    return response.data;
  }

  /**
   * Загрузка приема смены
   *
   * @param sectionId - уникальный идентификатор участка
   * @param date - дата
   * @param shift - смена
   * @param orderEquipmentId - уникальный идентификатор оборудования
   * @param shiftAcceptanceId - уникальный идентификатор приема смены
   *
   * @returns {Promise<*>}
   */
  async getShiftAcceptance(sectionId, date, shift, orderEquipmentId, shiftAcceptanceId) {
    const response = await HttpClient.get(
      `sections/${sectionId}/orders/${date}/${shift}/orderequipments/${orderEquipmentId}/shiftacceptance/${shiftAcceptanceId}`,
    );
    return response.data;
  }

  /**
   * Создание приема смены
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {string} - дата
   * @param shift {string} - смена
   * @param orderEquipmentId {number} - уникальный идентификатор оборудования
   * @param params
   * @param params.endingDatetime {string} - дата и время окончания приема смены
   *
   * @returns {Promise<*>}
   */
  async createShiftAcceptance(sectionId, date, shift, orderEquipmentId, params) {
    const response = await HttpClient.post(
      `sections/${sectionId}/orders/${date}/${shift}/orderEquipments/${orderEquipmentId}/shiftacceptance`,
      params,
    );
    return response.data;
  }

  /**
   * Обновление данных приема смены
   *
   * @param sectionId {number} - уникальный идентификатор участка
   * @param date {string} - дата
   * @param shift {string} - смена
   * @param orderEquipmentId {number} - уникальный идентификатор оборудования
   * @param shiftAcceptanceId - уникальный идентификатор приема смены
   * @param params
   * @param params.endingDatetime {string} - дата и время окончания приема смены
   *
   * @returns {Promise<*>}
   */
  async updateShiftAcceptance(sectionId, date, shift, orderEquipmentId, shiftAcceptanceId, params) {
    const response = await HttpClient.put(
      `sections/${sectionId}/orders/${date}/${shift}/orderEquipments/${orderEquipmentId}/shiftacceptance/${shiftAcceptanceId}`,
      params,
    );
    return response.data;
  }

  /**
   * Удаление приема смены
   *
   * @param sectionId - участок
   * @param date - дата
   * @param shift - смена
   * @param orderEquipmentId - уникальный идентификатор оборудования
   * @param shiftAcceptanceId - уникальный идентификатор приема смены
   *
   * @returns {Promise<*>}
   */
  async removeShiftAcceptance(sectionId, date, shift, orderEquipmentId, shiftAcceptanceId) {
    const response = await HttpClient.delete(
      `sections/${sectionId}/orders/${date}/${shift}/orderEquipments/${orderEquipmentId}/shiftacceptance/${shiftAcceptanceId}`,
    );
    return response.data;
  }

  /**
   * Получение настроек отчета "Суточный машины"
   *
   * @returns {Promise<*>}
   */
  async getSettingsReportDailyMachine() {
    const response = await HttpClient.get('settingsreportdailymachines');
    return response.data;
  }

  /**
   * Создание настройки отчета "Суточный машины"
   *
   * @param params.name {string} - наименование
   * @param params.unitId {number} - идентификатор единицы измерения
   * @param params.listPriority {number} - порядковый номер
   * @param params.workTypeIds {[number]} - идентификаторы типов работ
   * @param params.workCategoryGroupIds {[number]} - идентификаторы групп категорий работ
   *
   * @returns {Promise<*>}
   */
  async createSettingsReportDailyMachine(params) {
    const response = await HttpClient.post('settingsreportdailymachines', params);
    return response.data;
  }

  /**
   * Обновление настройки отчета "Суточный машины"
   *
   * @param params.id {number} - уникальный идентификатор настройки
   * @param params.name {string} - наименование
   * @param params.unitId {number} - идентификатор единицы измерения
   * @param params.listPriority {number} - порядковый номер
   * @param params.workTypeIds {[number]} - идентификаторы типов работ
   * @param params.workCategoryGroupIds {[number]} - идентификаторы групп категорий работ
   *
   * @returns {Promise<*>}
   */
  async updateSettingsReportDailyMachine(params) {
    const response = await HttpClient.put(`settingsreportdailymachines/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление настройки отчета "Суточный машины"
   *
   * @param id {number} - уникальный идентификатор настройки
   *
   * @returns {Promise<*>}
   */
  async removeSettingsReportDailyMachine(id) {
    const response = await HttpClient.delete(`settingsreportdailymachines/${id}`);
    return response.data;
  }

  /**
   * Скачивание отчета "Суточный машины"
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.date {string} - дата
   *
   * @returns {Promise<*>}
   */
  async downloadReportDailyMachine(reportName, params) {
    await HttpClient.get('reportdailymachine',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Получение настроек отчета "Суточный сводный"
   *
   * @returns {Promise<*>}
   */
  async getSettingsReportDailySummary() {
    const response = await HttpClient.get('settingsreportdailysummaries');
    return response.data;
  }

  /**
   * Создание настройки отчета "Суточный сводный"
   *
   * @param params.name {string} - наименование
   * @param params.unitId {number} - идентификатор единицы измерения
   * @param params.listPriority {number} - порядковый номер
   * @param params.isIncluding {boolean} - признак пустой строки в т.ч.
   * @param params.ash {number} - зольность
   * @param params.settingsPlannedGeneralIndicatorIds {[number]} - идентификаторы настроек общих плановых показателей
   * @param params.settingsReportDailySummaryWorkTypeRelations {[object]} - связи типов работ с сортами угля
   * @param params.bedIds {[number]} - идентификаторы пластов
   *
   * @returns {Promise<*>}
   */
  async createSettingsReportDailySummary(params) {
    const response = await HttpClient.post('settingsreportdailysummaries', params);
    return response.data;
  }

  /**
   * Обновление настройки отчета "Суточный сводный"
   *
   * @param params.id {number} - уникальный идентификатор настройки
   * @param params.name {string} - наименование
   * @param params.unitId {number} - идентификатор единицы измерения
   * @param params.listPriority {number} - порядковый номер
   * @param params.isIncluding {boolean} - признак пустой строки в т.ч.
   * @param params.ash {number} - зольность
   * @param params.settingsPlannedGeneralIndicatorIds {[number]} - идентификаторы настроек общих плановых показателей
   * @param params.settingsReportDailySummaryWorkTypeRelations {[object]} - связи типов работ с сортами угля
   * @param params.bedIds {[number]} - идентификаторы пластов
   *
   * @returns {Promise<*>}
   */
  async updateSettingsReportDailySummary(params) {
    const response = await HttpClient.put(`settingsreportdailysummaries/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление настройки отчета "Суточный сводный"
   *
   * @param id {number} - уникальный идентификатор настройки
   *
   * @returns {Promise<*>}
   */
  async removeSettingsReportDailySummary(id) {
    const response = await HttpClient.delete(`settingsreportdailysummaries/${id}`);
    return response.data;
  }

  /**
   * Скачивание отчета "Суточный сводный"
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.date {string} - дата
   *
   * @returns {Promise<*>}
   */
  async downloadReportDailySummary(reportName, params) {
    await HttpClient.get('reportdailysummary',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Получение логов
   *
   * page {number|undefined} - страница пагинации
   * search {string|undefined} - строка для поиска
   * types {[number]|undefined} - фильтр по разделу
   * action {number|undefined} - фильтр по событию
   * userId {number|undefined} - фильтр по пользователю
   * dateTimeFrom {string|undefined} - фильтр по дате "с"
   * dateTimeTo {string|undefined} - фильтр по дате "по"
   *
   * entity {number|undefined} - фильтр по сущности
   * @returns {Promise<*>}
   */
  async getLogs(page, search, types, action, userId, dateTimeFrom, dateTimeTo, entity) {
    const response = await HttpClient.get('logs', {
      params: {
        page, search, types, action, userId, dateTimeFrom, dateTimeTo, entity,
      },
    });
    return response.data;
  }

  /**
   * Получить часы максимума
   *
   * @param {string} params.date - дата
   * @param {number} params.shift - смена
   *
   * @returns {Promise<*>}
   */
  async getMaximumHours(params) {
    const response = await HttpClient.get('maximumhours', { params });
    return response.data;
  }

  /**
   * Скачивание справки пользователя
   *
   * @returns {Promise<*>}
   */
  async downloadUserHelp() {
    await HttpClient.get('help/:user',
      { responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        'UserHelp.pdf',
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Скачивание справки администратора
   *
   * @returns {Promise<*>}
   */
  async downloadAdminHelp() {
    await HttpClient.get('help/:admin',
      { responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        'AdminHelp.pdf',
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Получение оборудования наряда для синхронизации с SAP
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} orderEquipmentId - уникальный идентификатор оборудования наряда
   *
   * @returns {Promise<*>}
   */
  async getSapOrderEquipment(sectionId, orderEquipmentId) {
    const response = await HttpClient.get(`sections/${sectionId}/saporderequipments/${orderEquipmentId}`);
    return response.data;
  }

  /**
   * Получение оборудования наряда для синхронизации с SAP
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {object} params
   * @param {string} params.dateFrom - дата начала периода
   * @param {string} params.dateTo - дата конца периода
   * @param {number} params.shift - смена
   *
   * @returns {Promise<*>}
   */
  async getLiteSapOrderEquipments(sectionId, params) {
    const response = await HttpClient.get(`sections/${sectionId}/saporderequipments`, { params });
    return response.data;
  }

  /**
   * Скачивание отчета "Проверка синхронизации с SAP"
   *
   * @param {object} params
   * @param {string} params.year - год
   * @param {string} params.month - месяц
   *
   * @returns {Promise<*>}
   */
  async downloadReportSyncSap(params) {
    await HttpClient.get('reportSyncSap',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        'ReportSyncSap.xlsx',
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Добавление сотрудника в экипаж оборудования наряда
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} orderEquipmentId - уникальный идентификатор оборудования наряда
   * @param {object} params
   * @param {number} params.employeeId - уникальный идентификатор сотрудника
   * @param {number} params.positionGroupTypeId - уникальный идентификатор типа группы должностей
   *
   * @returns {Promise<*>}
   */
  async sapOrderEquipmentAddEmployee(sectionId, orderEquipmentId, params) {
    const response = await HttpClient.post(
      `sections/${sectionId}/saporderequipments/${orderEquipmentId}:addemployee`, params,
    );
    return response.data;
  }

  /**
   * Удаление сотрудника у SapWork оборудования наряда
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} orderEquipmentId - уникальный идентификатор оборудования наряда
   * @param {string} workTypeCode - код типа работы/простоя/электропростоя
   * @param {number} employeeId - уникальный идентификатор сотрудника
   *
   * @returns {Promise<*>}
   */
  async sapOrderEquipmentRemoveEmployee(sectionId, orderEquipmentId, workTypeCode, employeeId) {
    const response = await HttpClient.delete(
      `sections/${sectionId}/saporderequipments/${orderEquipmentId}/works/${workTypeCode}/employees/${employeeId}`,
    );
    return response.data;
  }

  /**
   * Удаление сотрудника со всех SapWork оборудования наряда
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} orderEquipmentId - уникальный идентификатор оборудования наряда
   * @param {number} employeeId - уникальный идентификатор сотрудника
   *
   * @returns {Promise<*>}
   */
  async sapOrderEquipmentRemoveEmployeeFromAllSapWork(sectionId, orderEquipmentId, employeeId) {
    const response = await HttpClient.delete(
      `sections/${sectionId}/saporderequipments/${orderEquipmentId}/employees/${employeeId}`,
    );
    return response.data;
  }

  /**
   * Получение готовых данных по оборудованию для синхронизации с SAP
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {object} params
   * @param {string} params.dateFrom - дата начала периода
   * @param {string} params.dateTo - дата конца периода
   * @param {number} params.shift - смена
   *
   * @returns {Promise<*>}
   */
  async getSapOrderEquipmentShiftCaptions(sectionId, params) {
    const response = await HttpClient.get(`sections/${sectionId}/shiftcaptionequipments`, { params });
    return response.data;
  }

  /**
   * Получение готовых данных по оборудованию с промежуточной базы данных
   *
   * @param {object} params
   * @param {string} params.dateFrom - дата начала периода
   * @param {string} params.dateTo - дата конца периода
   * @param {number} params.shift - смена
   *
   * @returns {Promise<*>}
   */
  async getShiftCaptionsFromStagingDatabase(params) {
    const response = await HttpClient.get('shiftcaptions', { params });
    return response.data;
  }

  /**
   * Получение маркшейдерских замеров
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} year - год
   * @param {number} month - месяц
   *
   * @returns {Promise<*>}
   */
  async getSapOrderEquipmentSurveyMeterings(sectionId, year, month) {
    const response = await HttpClient.get(`sections/${sectionId}/${year}/${month}/surveymeteringequipments`);
    return response.data;
  }

  /**
   * Обновление маркшейдерского замера
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} year - год
   * @param {number} month - месяц
   * @param {number} equipmentId - уникальный идентификатор оборудования
   * @param {string} workTypeSapCode - код сапа из типа работы
   * @param {object} item
   * @param {string} item.value - значение замера
   *
   * @returns {Promise<*>}
   */
  async updateSapOrderEquipmentSurveyMetering(sectionId, year, month, equipmentId, workTypeSapCode, item) {
    const response = await HttpClient.put(
      `sections/${sectionId}/${year}/${month}/surveymeteringequipments/${equipmentId}/${workTypeSapCode}`, item,
    );
    return response.data;
  }

  /**
   * Отправка в SAP маркшейдерских замеров оборудования
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} year - год
   * @param {number} month - месяц
   * @param {number} params
   * @param {number} params.isRecalculate - перерасчитать данные на временной шкале
   *
   * @returns {Promise<*>}
   */
  async sapOrderEquipmentSurveyMeteringsSendSap(sectionId, year, month, params) {
    const newParams = new FormData();
    newParams.append('isRecalculate', params.isRecalculate);
    const response = await HttpClient.post(
      `sections/${sectionId}/${year}/${month}/surveymeteringequipments/:sendSap`,
      newParams,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );
    return response.data;
  }

  /**
   * Отправка в SAP готовых данных по оборудованию
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {object} item (см. SapOrderEquipmentShiftsCaption.toApi)
   *
   * @returns {Promise<*>}
   */
  async sapOrderEquipmentShiftCaptionsSendSap(sectionId, item) {
    const response = await HttpClient.post(`sections/${sectionId}/shiftcaptionequipments/:sendsap`, item);
    return response.data;
  }

  /**
   * Получение локомотива для синхронизации с SAP БПТУ
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} date - дата
   * @param {number} shift - смена
   * @param {number} locomotiveId - уникальный идентификатор оборудования наряда
   *
   * @returns {Promise<*>}
   */
  async getSapLocomotive(sectionId, date, shift, locomotiveId) {
    const response = await HttpClient.get(`sections/${sectionId}/saplocomotives/${date}/${shift}/${locomotiveId}`);
    return response.data;
  }

  /**
   * Получение локомотивов для синхронизации с SAP БПТУ
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {object} params
   * @param {string} params.dateFrom - дата начала периода
   * @param {string} params.dateTo - дата конца периода
   * @param {number} params.shift - смена
   *
   * @returns {Promise<*>}
   */
  async getLiteSapLocomotives(sectionId, params) {
    const response = await HttpClient.get(`sections/${sectionId}/saplocomotives`, { params });
    return response.data;
  }

  /**
   * Добавление сотрудника в экипаж локомотива
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} date - дата
   * @param {number} shift - смена
   * @param {number} locomotiveId - уникальный идентификатор локомотива
   * @param {object} params
   * @param {number} params.employeeId - уникальный идентификатор сотрудника
   * @param {number} params.positionGroupTypeId - уникальный идентификатор типа группы должностей
   *
   * @returns {Promise<*>}
   */
  async sapLocomotiveAddEmployee(sectionId, date, shift, locomotiveId, params) {
    const response = await HttpClient.post(
      `sections/${sectionId}/saplocomotives/${date}/${shift}/${locomotiveId}:addemployee`, params,
    );
    return response.data;
  }

  /**
   * Удаление сотрудника у SapWork локомотива
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} date - дата
   * @param {number} shift - смена
   * @param {number} locomotiveId - уникальный идентификатор оборудования наряда
   * @param {string} workTypeId - уникальный идентификатор типа работы/простоя/электропростоя
   * @param {number} employeeId - уникальный идентификатор сотрудника
   *
   * @returns {Promise<*>}
   */
  async sapLocomotiveRemoveEmployee(sectionId, date, shift, locomotiveId, workTypeId, employeeId) {
    const response = await HttpClient.delete(
      `sections/${sectionId}/saplocomotives/${date}/${shift}/${locomotiveId}/works/${workTypeId}/employees/${employeeId}`,
    );
    return response.data;
  }

  /**
   * Получение маркшейдерских замеров по локомотивам
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} year - год
   * @param {number} month - месяц
   *
   * @returns {Promise<*>}
   */
  async getSapLocomotivesSurveyMeterings(sectionId, year, month) {
    const response = await HttpClient.get(`sections/${sectionId}/${year}/${month}/surveymeteringlocomotives`);
    return response.data;
  }

  /**
   * Обновление маркшейдерского замера по локомотиву
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} year - год
   * @param {number} month - месяц
   * @param {number} workTypeId - уникальный идентификатор типа работы
   * @param {object} item
   * @param {string} item.value - значение замера
   *
   * @returns {Promise<*>}
   */
  async updateSapLocomotiveSurveyMetering(sectionId, year, month, workTypeId, item) {
    const response = await HttpClient.put(
      `sections/${sectionId}/${year}/${month}/surveymeteringlocomotives/${workTypeId}`, item,
    );
    return response.data;
  }

  /**
   * Получение готовых данных по локомотивам для синхронизации с SAP
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {object} params
   * @param {string} params.dateFrom - дата начала периода
   * @param {string} params.dateTo - дата конца периода
   * @param {number} params.shift - смена
   *
   * @returns {Promise<*>}
   */
  async getSapLocomotiveShiftCaptions(sectionId, params) {
    const response = await HttpClient.get(`sections/${sectionId}/shiftcaptionlocomotives`, { params });
    return response.data;
  }

  /**
   * Отправка в SAP готовых данных по локомотивам
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {object} item (см. SapLocomotiveShiftsCaption.toApi)
   *
   * @returns {Promise<*>}
   */
  async sapLocomotiveShiftCaptionsSendSap(sectionId, item) {
    const response = await HttpClient.post(`sections/${sectionId}/shiftcaptionlocomotives/:sendsap`, item);
    return response.data;
  }

  /**
   * Отправка в SAP маркшейдерских замеров локомотивов
   *
   * @param {number} sectionId - уникальный идентификатор участка
   * @param {number} year - год
   * @param {number} month - месяц
   *
   * @returns {Promise<*>}
   */
  async sapLocomotiveSurveyMeteringsSendSap(sectionId, year, month) {
    const response = await HttpClient.post(`sections/${sectionId}/${year}/${month}/surveymeteringlocomotives/:sendSap`);
    return response.data;
  }

  /**
   * Загрузка полного наряда
   *
   * @param date - дата
   * @param shift - смена
   * @param sectionId - уникальный идентификатор участка
   * @returns {Promise<*>}
   */
  async getFullOrderBy(date, shift, sectionId) {
    const response = await HttpClient.get(
      `sections/${sectionId}/fullorders/${date}/${shift}`,
    );
    return response.data;
  }

  /**
   * Синхронизация закрытого путевого листа
   *
   * @param date - дата
   * @returns {Promise<*>}
   */
  async waybillSync(date) {
    const response = await HttpClient.post(`waybillsyncs/${date}:sync`);
    return response.data;
  }

  /**
   * Переключение высоковольтной кабельной линии
   *
   * @param {string} date - дата
   * @param {number} shift - смена
   * @param {object} params
   * @param {number} params.equipmentId - идентификатор оборудования
   * @param {number} params.feederElectricalElementId - идентификтатор фидера
   * @param {number} params.switchElectricalElementId - идентификатор ПП
   * @param {number} params.ctsElectricalElementId - идентификатор КТП
   * @param {string} params.startingDatetime - дата и время начала
   * @param {string} params.endingDatetime - дата и время окончания
   * @param {number} params.malfunctionTypeId - идентификтатор описания работы
   * @param {number} params.idleTypeId - идентификатор работы на линии
   * @param {string} params.description - пояснение
   * @returns {Promise<*>}
   */
  async moveEquipmentWithElectricalIdle(date, shift, params) {
    const response = await HttpClient.post(
      `electricalelementnodes/${date}/${shift}/:moveequipmentwithelectricalidle`,
      params
    );
    return response.data;
  }

  /**
   * Изменение схемы подключения
   *
   * @param {string} date - дата
   * @param {number} shift - смена
   * @param {object} params
   * @param {number} params.equipmentId - идентификатор оборудования
   * @param {number} params.feederElectricalElementId - идентификтатор фидера
   * @param {number} params.switchElectricalElementId - идентификатор ПП
   * @param {number} params.ctsElectricalElementId - идентификатор КТП
   * @returns {Promise<*>}
   */
  async moveEquipment(date, shift, params) {
    const response = await HttpClient.post(
      `electricalelementnodes/${date}/${shift}/:moveequipment`,
      params
    );
    return response.data;
  }

  /**
   * Скачивание отчета 2БПКО
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.date {string} - дата
   *
   * @returns {Promise<*>}
   */
  async downloadReportBpko(reportName, params) {
    await HttpClient.get('reportbpko/',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Скачивание отчета по работе локомотивов на вскрыше
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.dateFrom {string} - дата начала периода
   * @param params.dateTo {string} - дата окончания периода
   *
   * @returns {Promise<*>}
   */
  async downloadReportWorkLocomotive(reportName, params) {
    await HttpClient.get('reportworklocomotive/',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  /**
   * Получение настроек проверки отправки марк. замера в САП
   *
   * @returns {Promise<*>}
   */
  async getSettingsValidateSurveyMeteringEquipments() {
    const response = await HttpClient.get('settingsValidateSurveyMeteringEquipments');
    return response.data;
  }

  /**
   * Создание настройки проверки отправки марк. замера в САП
   *
   * @param params {object}
   *
   * @returns {Promise<*>}
   */
  async createSettingsValidateSurveyMeteringEquipment(params) {
    const response = await HttpClient.post('settingsValidateSurveyMeteringEquipments', params);
    return response.data;
  }

  /**
   * Обновление настройки проверки отправки марк. замера в САП
   *
   * @param params.id {number} - уникальный идентификатор настройки отчета 2БПКО
   *
   * @returns {Promise<*>}
   */
  async updateSettingsValidateSurveyMeteringEquipment(params) {
    const response = await HttpClient.put(`settingsValidateSurveyMeteringEquipments/${params.id}`, params);
    return response.data;
  }

  /**
   * Удаление настройки проверки отправки марк. замера в САП
   *
   * @param id {number} - уникальный идентификатор настройки
   *
   * @returns {Promise<*>}
   */
  async removeSettingsValidateSurveyMeteringEquipment(id) {
    const response = await HttpClient.delete(`settingsValidateSurveyMeteringEquipments/${id}`);
    return response.data;
  }

  /**
   * Получение наруботак экскаватора
   *
   * @param {object} params
   * @param {string} params.dateFrom - дата/время начала периода
   * @param {string} params.dateTo - дата/время конца периода
   * @param {number} params.equipmentId - идентификатор оборудования
   *
   * @returns {Promise<*>}
   */
  async getExcavatorOperatingTimes(params) {
    const response = await HttpClient.get('ExcavatorOperatingTimes', { params });
    return response.data;
  }

  /**
   * Скачивание отчета по наработке экскаватора
   *
   * @param reportName {string} - название отчета
   * @param params
   * @param params.equipmentId {number} - идентификатор оборудования
   * @param params.dateFrom {string} - дата начала периода
   * @param params.dateTo {string} - дата окончания периода
   *
   * @returns {Promise<*>}
   */
  async downloadReportExcavatorOperatingTime(reportName, params) {
    await HttpClient.get('reportExcavatorOperatingTime/',
      { params, responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        reportName,
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }
}

const Api = new _Api();

export default Api;
